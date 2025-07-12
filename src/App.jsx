import Homepage from './components/Homepage';
import SignUpForm from './components/authentication/SignUpForm';
import LoginForm from './components/authentication/LoginForm';
import AdminForm from './components/authentication/AdminForm';
import Post from './components/Post';

function App() {
  const mockPost = {
    author: 'Stephen',
    title: 'Hello world',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis beatae ut laboriosam, et quisquam nisi eaque rem est nesciunt culpa tempore ad expedita rerum tempora asperiores perferendis quasi officiis.',
    publishDate: new Date(),
  }

  return (
    <Post post={mockPost} />
  )
}

export default App
