import { useEffect, useState } from "react";
import Post from "./Post";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  console.log({posts})
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
      setPosts(response.posts)
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
      <a href='/'>Home</a>
      <a href='/posts'>Posts</a>
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