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
          Published on: {(post.publishDate).toDateString()} by 
          <span> {post.author}</span>  
        </p>
      </section>
    </div>
  )
}