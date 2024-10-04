import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{githubinfoLoader} from './components/Github/Github.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Layout/>} >
      <Route path="/"  element={<Home/>}    />
      <Route path="/Contact"  element={<Contact/>}    />
      <Route path="/About"  element={<About/>}    />
      {/* taking input from the user using params and displayin it */}
      <Route path="user/:userid"  element={<User/>}    />
      {/* yaha loader ki maddad se data fetch karenge more optimise hai */}
      <Route
      loader={githubinfoLoader}
       path="/github" 
        element={<Github/>}    />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
