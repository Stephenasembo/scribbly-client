import Input from "../Input"

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
          <Input type="text" name="username" id="username" placeholder="John Doe" isrequired={true}/>
        </label>
        <label htmlFor="password">
          Password(*): 
          <Input type="password" name="password" id="password" placeholder="Enter your password" isrequired={true}/>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}