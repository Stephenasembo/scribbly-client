export default function LoginForm() {
  return(
    <div>
      <p>
        Log back in to your account.
        Fields are marked with an asterisk(*) are required.
      </p>
      <form action="/" method="post">
        <label htmlFor="username">
          Username(*): 
          <input type="text" name="username" id="username" placeholder="John Doe" required/>
        </label>
        <label htmlFor="password">
          Password(*): 
          <input type="password" name="password" id="password" placeholder="Enter your password" required/>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}