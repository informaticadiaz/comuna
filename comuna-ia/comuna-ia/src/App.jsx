import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from "./routes/RouterConfig";

function App() {
  
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
