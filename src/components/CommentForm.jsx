import Button from "./Button";

export default function CommentForm({value, setValue, cancelComment, submitComment}) {
  return(
    <form action="">
      <textarea
      value={value}
      name="comment"
      id="comment"
      onChange={(e) => {
        const newValue = e.target.value;
        setValue(newValue)
      }}
      >
      </textarea>
      <div>
        <Button text='Cancel' onClick={cancelComment}/>
        <Button text='Submit' onClick={submitComment}/>
      </div>
    </form>
)
}