import { useNavigate } from "react-router-dom";
import Button from "../Button"
import Input from "../Input"
import { useState } from "react";
import styles from '../../styles/Form.module.css'
import { useAuthContext } from "../context/AuthContext";

export default function LoginForm() {
  const [keyCounter, setKeyCounter] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const {setCurrentUser} = useAuthContext();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}auth/login`

  async function sendData() {
    let response = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    setLoading(false);
    if (response.status === 200) {
      response = await response.json();
      const jwt = response.token;
      const user = response.user;
      localStorage.setItem('jwt', `Bearer ${jwt}`);
      setCurrentUser(user);
      return navigate('/app');
    }
    if (response.status === 401) {
      let errorData = await response.json()
      if (errorData.message === 'User not found') {
        let errorMsg = {
          header: 'Unathorized access.',
          errorInput: 'Username',
          message: 'Username not found!',
        }
        return setError(errorMsg)
      }
      if (errorData.message === 'Incorrect password') {
        const errorMsg = {
          header: 'Unathorized access.',
          errorInput: 'Password',
          message: 'Incorrect password entered!',
        }
        return setError(errorMsg)
      }
    }
    return setError({
      header: '500 Server Error',
      errorInput: 'Server',
      message: 'An internal error occured'
    })
  }

  function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setKeyCounter(keyCounter + 1);
    sendData();
    setFormData({});
  }

  return(
    <div>
      {loading ?
      <div className={styles.spinnerContainer}>
        <p>Logging you in back to your account...</p>
        <div className={styles.spinner}></div>
      </div> :
      <div className={styles.container}>
        {error.errorInput === 'Server' ?
        <div>
          <h1>{error.header}</h1>
          <div>
            <p>{error.message}</p>
          </div>
        </div> :
        <div>
          <h1 className='heading'>Login To Your Account</h1>
          <form>
            <p>
              Fields marked with an asterisk(*) are required.
            </p>
            <label htmlFor="username">
              Username(*):
              <Input
              key={`username${keyCounter}`}
              type="text"
              name="username"
              id="username"
              placeholder="John Doe"
              isrequired={true}
              data={formData}
              setData={setFormData}
              />
              {error.errorInput === 'Username' &&
              <p className={styles.error}>{error.message}</p>
              }
            </label>
            <label htmlFor="password">
              Password(*):
              <Input
              key={`password${keyCounter}`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              isrequired={true}
              data={formData}
              setData={setFormData}
              />
              {error.errorInput === 'Password' &&
              <p className={styles.error}>{error.message}</p>
              }
            </label>
            <Button
            className={styles.btn}
            text='Log in'
            onClick={submitForm}
            />
          </form>
        </div>
        }
      </div>
      }
    </div>
  )
}