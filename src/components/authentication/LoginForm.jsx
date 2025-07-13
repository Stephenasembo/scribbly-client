import { useNavigate } from "react-router-dom";
import Button from "../Button"
import Input from "../Input"
import { useState } from "react";

export default function LoginForm() {
  const [keyCounter, setKeyCounter] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const url = 'http://localhost:3000/auth/login'

  async function sendData() {
    let response = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (response.status !== 200) {
      let errorData = await response.json()
      return console.log(errorData);
    }
    response = await response.json();
    const jwt = response.token;
    localStorage.setItem('jwt', `Bearer ${jwt}`)
    navigate('/app');
  }

  function submitForm(e) {
    e.preventDefault();
    setKeyCounter(keyCounter + 1);
    sendData();
    setFormData({});
  }

  return(
    <div>
      <p>
        Log back in to your account.
        Fields are marked with an asterisk(*) are required.
      </p>
      <form action="/" method="post">
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
        text='Log in'
        onClick={submitForm}
        />
      </form>
    </div>
  )
}