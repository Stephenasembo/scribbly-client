export default function SignUpForm() {
  return (
    <div>
      <p>
        Fill out the required details to become a member of Scribbly.
        Fields are marked with an asterisk(*) are required.
      </p>
      <form action="/" method="post">
        <label htmlFor="username">
          Username(*): 
          <input type="text" name="username" id="username" placeholder="John Doe" required/>
        </label>
        <label htmlFor="email">
          Email(*): 
          <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" required/>
        </label>
        <label htmlFor="password">
          Password(*): 
          <input type="password" name="password" id="password" placeholder="Enter your password" required/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}