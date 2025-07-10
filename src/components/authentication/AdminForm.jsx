export default function AdminForm() {
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
            <input type="text" name="adminSecret" id="adminSecret" placeholder="Admin promotion code" required/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}