import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github, { Gitinfo } from './components/Github.jsx'
import User from './components/User.jsx'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        loader: Gitinfo,
        path: "github",
        element: <Github />
      },
      {
        path:"User/:id",
        element: <User/>
      }
    ]
  }

])






// Here is second method of routing (uses of router)..........................................

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='About' element={<About />} />
//       <Route path='Contact' element={<Contact />} />
//       <Route path='github' element={<Github />} />
//       <Route path='User/:id' element={<User/>} />
//     </Route>
//   )

// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
