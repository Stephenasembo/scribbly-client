function App() {
  const mockPost = {
    author: 'Stephen',
    title: 'Hello world',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis beatae ut laboriosam, et quisquam nisi eaque rem est nesciunt culpa tempore ad expedita rerum tempora asperiores perferendis quasi officiis.',
    publishDate: new Date(),
  }

  return (
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
        <section className='post'>
          <h3>{mockPost.title}</h3>
          <p>
            {mockPost.content.slice(0, 100)} ...
            <a href="/">Read more</a>
            </p>
          <p>
            Published on: {(mockPost.publishDate).toDateString()} by 
            <span> {mockPost.author}</span>  
          </p>
        </section>
      </main>
      <footer>
        <p>Scribbly 2025 by Stephen Asembo.</p>
      </footer>
    </div>
  )
}

export default App
