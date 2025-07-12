import { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom"

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const url = 'http://localhost:3000/app/posts'

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

  useEffect(() => {
    fetchPosts();
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
    </main>
    <footer>
      <p>Scribbly 2025 by Stephen Asembo.</p>
    </footer>
    </div>
  )
}