import Button from "../Button"
import Input from "../Input"

export default function AdminForm() {
  function submitForm(e) {
    e.preventDefault()
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
            <Input type="text" name="adminSecret" id="adminSecret" placeholder="Admin promotion code" isrequired={true}/>
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