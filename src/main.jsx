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
import PrivateRoute from './Components/PrivateRoute'
import UpcommingEvents from './Components/UpcommingEvents'
import GamingCommunity from './Components/GamingCommunity'


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
      },
      {
        path: '/upcommingEvents',
        element: <PrivateRoute><UpcommingEvents></UpcommingEvents></PrivateRoute>
      },
      {
        path: '/Community',
        element: <PrivateRoute><GamingCommunity></GamingCommunity></PrivateRoute>
      },
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
