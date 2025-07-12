export default function Post({post}) {
  return(
    <div>
      <section className='post'>
        <h3>{post.title}</h3>
        <p>
          {post.content.slice(0, 100)} ...
          <a href="/">Read more</a>
          </p>
        <p>
          Published on: {(new Date(post.publishedAt)).toDateString()} by 
          <span> {post.author}</span>  
        </p>
      </section>
    </div>
  )
}