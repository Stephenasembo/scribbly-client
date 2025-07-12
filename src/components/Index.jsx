import { Link } from "react-router-dom"

export default function Index() {
  return (
    <div>
      <h1>Scribbly</h1>
      <p>
        Welcome to Scribbly, a blogging app where you get to read thoughts and ideas shared.
        Contribute to the discussion by leaving comments.
      </p>
      <div>
        <p>
          Login back to your account here. <Link to="/login">Login</Link>
        </p>
        <p>
          Don't have an account ?
          Create one here. <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}