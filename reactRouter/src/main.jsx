import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/home/Home.jsx'
import About from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import Users from './component/users/Users.jsx'
import Github, { githubInfoLoader } from './component/github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>

//       }
//     ]

//   }
// ])


/// methord two  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<Users/>}/>
    <Route 
    loader={githubInfoLoader}
    path='github'
     element={<Github/>}/>


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
