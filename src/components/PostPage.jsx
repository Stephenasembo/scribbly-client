import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comment from "./Comment";

export default function PostPage() {
  const [post, setPost] = useState({})
  const { postId } = useParams();

  useEffect(() => {
    const url = `http://localhost:3000/app/posts/${postId}`
    const token = localStorage.getItem('jwt');

    async function fetchPost() {
      let response = await fetch(url, {
        mode: 'cors',
        headers: {
          'Authorization': token
        }
      });
      if(response.status === 200) {
        response = await response.json();
        setPost(response.data);
      } else {
        console.log('An error occured.')
      }
    }

    fetchPost()
  }, [postId])

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <span>{post.author} </span>
        <span>
          {(new Date(post.publishedAt)).toDateString()}
        </span>
      </p>
      <div>
        <p>
          {post.content}
        </p>
        <div>
          {
            post.comments &&
            post.comments.length > 0 ?
            post.comments.map((comment) => (
              <Comment
              key={comment.id}
              comment={comment}/>
            )):
            <p>
              No comments yet.
            </p>
          }
        </div>
      </div>
    </div>
  )
}