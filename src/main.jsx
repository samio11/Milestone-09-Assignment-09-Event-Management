import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FixedElement from './Components/FixedElement'
import Home from './Home'
import Login from './Components/Login'
import Register from './Components/Register'
import ErrorElement from './ErrorElement'
import AuthProvider from './Components/AuthProvider'


const my_web_paths = createBrowserRouter([
  {
    path: '/',
    element: <FixedElement></FixedElement>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={my_web_paths}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
