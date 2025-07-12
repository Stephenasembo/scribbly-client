import Post from "./Post";

export default function Homepage() {
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
      <Post />
    </main>
    <footer>
      <p>Scribbly 2025 by Stephen Asembo.</p>
    </footer>
    </div>
  )
}