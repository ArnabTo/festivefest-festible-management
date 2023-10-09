import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Route from './routes/Route.jsx';
import Home from './components/Home/Home.jsx';
import Registration from './components/registration/Registration.jsx';
import Login from './components/login/Login.jsx';
import Error from './Error/Error.jsx';
import About from './components/About/About';
import Services from './components/Service/Services';
import App from './App';
import AnimatedCursor from "react-animated-cursor"
import ServiceDetails from './components/Service/ServiceDetails';
import AuthProvider from './provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/serv',
        element:<Services></Services>
      },
      {
        path:'/serv/:servId',
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch('services.json')
      },
      {
        path:'/abt',
        element:<About></About>
      },
      {
        path:'/log',
        element:<Login></Login>
      },
      {
        path:'/reg',
        element:<Registration></Registration>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  <App></App>
  </AuthProvider>
  
    <AnimatedCursor
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={1.7}
    outerAlpha={0}
    outerStyle={{
      border: '3px solid #6d05ff'
    }}
    innerStyle={{
      backgroundColor: '#6d05ff'
    }}
  />
  </React.StrictMode>,
)
