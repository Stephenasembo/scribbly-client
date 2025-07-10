import Button from "../Button"
import Input from "../Input"
import { useState } from "react";

export default function LoginForm() {
  const [keyCounter, setKeyCounter] = useState(0);
  function submitForm(e) {
    e.preventDefault();
    setKeyCounter(keyCounter + 1);
    console.log('form submitted')
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