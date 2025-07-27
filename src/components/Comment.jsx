import { useState } from "react";
import Button from "./Button";
import CommentForm from "./CommentForm";

export default function Comment({comment, user, commentId, pageUpdated, updatePage}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [content, setContent] = useState(comment.content)

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem('jwt');

  async function deleteComment() {
    const url = `${baseUrl}app/comments/${commentId}`
    let response = await fetch(url, {
      mode: 'cors',
      method: 'DELETE',
      headers: {
        'Authorization': token
      }
    })
    if (response.status === 204) {
      return updatePage(!pageUpdated);
    }
    console.log('An error occurred on deleting comment.')
  }

  function cancelComment(e) {
    e.preventDefault()
    setIsUpdating(false);
  }

  function toggleComment() {
    setIsUpdating(true);
  }

  async function updateComment(e) {
    e.preventDefault()
    const url = `${baseUrl}app/comments/${commentId}`;
    let response = await fetch(url, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ content })
    })
    if (response.status === 200) {
      response = await response.json();
      const newContent = response.data.content;
      setIsUpdating(false);
      updatePage(!pageUpdated);
      return setContent(newContent)
    }

    console.log('An error occured')
  }

  return (
    <div>
      {isUpdating ?
      <CommentForm
      value={content}
      setValue={setContent}
      cancelComment={cancelComment}
      submitComment={updateComment}
      btnText='Update comment'
      />:
      <div>
        <p>
          {comment.content}
        </p>
        <p>
          <span>@{comment.author} </span>
          <span>{(new Date(comment.createdAt)).toDateString()}</span>
        </p>
        {comment.userId === user.id &&
        <div>
          <Button
          text='Update Comment'
          onClick={toggleComment}
          />
          <Button
          text='Delete Comment'
          onClick={deleteComment}
          />
        </div>
        }
      </div>
      }
    </div>
  )
}