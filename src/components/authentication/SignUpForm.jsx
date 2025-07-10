import Input from "../Input";
import Button from "../Button";

export default function SignUpForm() {
  function submitForm(e) {
    e.preventDefault();
    console.log('form submitted')
  }

  return (
    <div>
      <p>
        Fill out the required details to become a member of Scribbly.
        Fields are marked with an asterisk(*) are required.
      </p>
      <form action="/sign-up" method="post">
        <label htmlFor="username">
          Username(*): 
          <Input type="text" name="username" id="username" placeholder="John Doe" isrequired={true}/>
        </label>
        <label htmlFor="email">
          Email(*): 
          <Input type="email" name="email" id="email" placeholder="johndoe@gmail.com" isrequired={true}/>
        </label>
        <label htmlFor="password">
          Password(*): 
          <Input type="password" name="password" id="password" placeholder="Enter your password" isrequired={true}/>
        </label>
        <Button
        text='Submit'
        onClick={submitForm}
        />
      </form>
    </div>
  )
}