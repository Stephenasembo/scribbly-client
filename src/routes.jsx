import Homepage from './components/Homepage';
import SignUpForm from './components/authentication/SignUpForm';
import LoginForm from './components/authentication/LoginForm';
import AdminForm from './components/authentication/AdminForm';
import Index from './components/Index';
import ErrorPage from './components/ErrorPage';
import PostPage from './components/PostPage';

const routes = [
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />
  },
  {
    path: 'register',
    element: <SignUpForm />
  },
  {
    path: 'login',
    element: <LoginForm />
  },
  {
    path: 'admin-registration',
    element: <AdminForm />
  },
  {
    path: 'app',
    element: <Homepage />
  },
  {
    path: 'posts/:postId',
    element: <PostPage />
  }
]

export default routes;
