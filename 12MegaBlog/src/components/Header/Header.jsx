import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' // used to see weather the user is login or not
import { useNavigate} from 'react-router-dom' // 




function Header() {
  const authStatus = useSelector((state)=>{state.auth.status})

  const navigate = useNavigate()
  // when we make a nagavite bar then a array is make then navigate through it
  const navItem = [
    {
      name: 'Home',
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug:"/Login",
      active:!authStatus,
    },
    {
      name:"Signup",
      slug:"/signup",
      active:!authStatus,
    },
    {
      name:"all Posts",
      slug:"/all Posts",
      active: authStatus,

    },
    {
      name: "Add Post",
      slug: "/Add Post",
      active: authStatus
    },
    {

    }
  ] 


  return (
    <header className='py-3
    shadow bg-gray-500'>
      <container>
      <nav className='flex'> 
        <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItem.map((item)=> 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2
                duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>   // where html element get repeate we apply keys
            ): null  )}

            {authStatus && (
              <li>
                <LogoutBtn /> 
              </li>
            )} {/* if authstatus is true then only the parenthesis will be displayed */}
        </ul>
      </nav>
      </container>
    </header>
  )
}

export default Header