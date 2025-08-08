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
    if (response.status !== 200) {
      let errorData = await response.json()
      return console.log(errorData);
    }
    response = await response.json();
    const jwt = response.token;
    const user = response.user;
    localStorage.setItem('jwt', `Bearer ${jwt}`);
    setCurrentUser(user);
    navigate('/app');
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
        <h1 className='heading'>Login To Your Account</h1>
        <form action="/" method="post">
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
  )
}