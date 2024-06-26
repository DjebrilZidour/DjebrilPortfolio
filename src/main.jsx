import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import Blog from './pages/Blog'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/github",
    element:"https://github.com/DjebrilZidour"
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

