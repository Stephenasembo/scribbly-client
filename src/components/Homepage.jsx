import { useEffect, useState } from "react";
import Post from "./Post";
import { Link, useNavigate } from "react-router-dom"
import styles from '../styles/Homepage.module.css'
import Button from "./Button";
import { useAuthContext } from "./context/AuthContext";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}app/posts`;

    async function fetchPosts() {
      const token = localStorage.getItem('scribbly_client_jwt');
      let response = await fetch (url, {
        mode: 'cors',
        headers: {
          'Authorization': token
        }
      })
      if (response.status === 200) {
        response = await response.json();
        setPosts(response.data)
      } else {
        console.log('An error occurred when fetching posts')
      }
    }

    fetchPosts()
      .then(() => setStatus('data'))
      .catch(() => setStatus('error'))
  }, [])

  return(
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.navLink}>Home</Link>
        <Button 
        text='Logout'
        className={styles.logoutBtn}
        onClick={() => {
          localStorage.removeItem('scribbly_client_jwt');
          navigate('/')
        }}
        />
      </nav>
      <header>
        <h1 className="heading">Welcome {currentUser.username}, to Scribbly.</h1>
        <div className={styles.hero}>
          <p>
            Explore thoughts, stories and ideas from seasoned writers.
          </p>
        </div>
      </header>
      <main>
        {status === 'loading' &&
        <div className={styles.spinner}></div>}
        {status === 'error' &&
        <p>An error occured while fetching data.</p>}
        { status === 'data' &&
        <div>
          <h2 className="heading">Posts</h2>
          {posts.length > 0 ?
            posts.map((post) => (
              <Post
              key={post.id}
              post={post}
              />
            )) :
            <p>No posts on this site yet.</p>
          }
        </div>
        }
      </main>
      <footer>
        <p>Scribbly 2025 by Stephen Asembo.</p>
      </footer>
    </div>
  )
}