import { Link } from "react-router-dom"
import styles from '../styles/Index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Scribbly</h1>
      <p>Welcome to Scribbly, a blogging app where you get to read thoughts and ideas shared.</p>
      <p>Contribute to the discussion by leaving comments.</p>
      <div className={styles.auth}>
        <p>
          Login back to your account here. <Link to="/login">Login</Link>
        </p>
        <p>
          Create an account here. <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}