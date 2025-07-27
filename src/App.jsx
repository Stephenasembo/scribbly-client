import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes";
import AuthComponent from "./components/contextComponents/AuthComponent";

const router = createBrowserRouter(routes);

function App() {
  return (
    <AuthComponent>
      <RouterProvider router={router} />
    </AuthComponent>
  )
}

export default App
