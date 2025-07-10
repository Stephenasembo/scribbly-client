import Button from "../Button"
import Input from "../Input"
import { useState } from "react";

export default function AdminForm() {
  const [keyCounter, setKeyCounter] = useState(0);
  function submitForm(e) {
    e.preventDefault();
    setKeyCounter(keyCounter + 1);
    console.log('form submitted')
  }

  return (
    <div>
      <h1>Become an admin</h1>
      <p>
        Admins are granted the role to become authors.
        Do  you know the secret passcode ?
        You need the passcode to become an admin.
      </p>
      <div>
        <p>
          Enter the passcode into the field below and become promoted today.
          The field is required for the form to be submitted.
        </p>
        <form action="/" method='post'>
          <label htmlFor="adminSecret">
            Passcode(*): 
            <Input
            key={`adminCode${keyCounter}`}
            type="text"
            name="adminSecret"
            id="adminSecret"
            placeholder="Admin promotion code"
            isrequired={true}
            />
          </label>
          <Button
          text='Submit'
          onClick={submitForm}
          />
        </form>
      </div>
    </div>
  )
}