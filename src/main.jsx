import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import Blog from './pages/Blog'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Pictures from './pages/Pictures';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/blog",
    element: <Blog />   // ✅ Blog is kept (wasn’t rendered before)
  },
  {
    path: "/github",
    element: <Navigate to="https://github.com/DjebrilZidour" />  // ✅ Proper redirect
  },
  {
    path: "/pictures",
    element: <Pictures />,  // ✅ Proper redirect
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
