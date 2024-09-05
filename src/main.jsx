import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Resume from './Pages/Resume/Resume.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Article from './Pages/Articles/Article.jsx'
import Contact from './Pages/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/articles",
        element: <Article />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
