import { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom"
import styles from '../styles/Homepage.module.css'

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}app/posts`;

    async function fetchPosts() {
      const token = localStorage.getItem('jwt');
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
    <div className='container'>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/posts'>Posts</Link>
    </nav>
    <header>
      <h1>Welcome to Scribbly.</h1>
      <div>
        <p>
          Explore thoughts, stories and ideas from seasoned writers.
        </p>
      </div>
      <button>Start reading</button>
    </header>
    <main>
      {status === 'loading' &&
      <div className={styles.spinner}></div>}
      {status === 'error' &&
      <p>An error occured while fetching data.</p>}
      { status === 'data' &&
      <div>
        <h2>Posts</h2>
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