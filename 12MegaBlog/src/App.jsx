
import { useState,useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux';
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import {Header,Footer} from "./components"
import {Outlet} from 'react-router-dom';

function App() {
  // first we have to start loading because it take time to featch data from server/database

  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))  // here .finally will run wheater .then run or not

  },[])
 
  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <outlet/> by react-router-dom // todo*/}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
 
}

export default App
