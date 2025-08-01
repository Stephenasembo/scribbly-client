import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/Form.module.css'

export default function SignUpForm() {
  const [keyCounter, setKeyCounter] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}auth/sign-up`

  async function sendData() {
    let response = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if(response.status === 200) {
      response = await response.json();
      const jwt = response.data.token;
      localStorage.setItem('jwt', `Bearer ${jwt}`)
      navigate('/app')
    } else {
      console.error(response)
    }
  }

  function submitForm(e) {
    e.preventDefault();
    setKeyCounter(keyCounter + 1);
    sendData();
    setFormData({});
  }

  return (
    <div className={styles.container}>
      <h1 className="heading">Register</h1>
      <p>Fill out the required details to become a member of Scribbly.</p>
      <p>Fields are marked with an asterisk(*) are required.</p>
      <form action="/sign-up" method="post">
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
        <label htmlFor="email">
          Email(*): 
          <Input
          key={`email${keyCounter}`}
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
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
        text='Submit'
        onClick={submitForm}
        />
      </form>
    </div>
  )
}