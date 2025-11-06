import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Notfound from './pages/Notfound.jsx';
import NavBar from './Layout/NavBar.jsx';
import SignIn from './pages/SignIn.jsx';
import Profile from './pages/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
    children:[
      {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
       {
    path: "/contact",
    element: <Contact></Contact>,
  },
       {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
   {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "*",
    element: <Notfound></Notfound>,
  },

    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


