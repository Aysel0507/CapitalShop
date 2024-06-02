import { ROUTES } from './routes/ROUTES'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'


const router = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
