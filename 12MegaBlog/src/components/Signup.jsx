import React,{useState} from 'react'
import authService from '../appwrite/auth'
import {Link,useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import {Button,Input,Logo} from "./index"

function Signup() {
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
           const userData = await authService.createAccount(data)
           if(userData){
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(login(userData));
            navigate("/")
           }
        } catch (error) {
            setError(error.message);
        }
    }
    
  return (
     <div className='flex items-center justify-center w-full'
    >
         <div className='mx-auto w-full max-w-lg
          bg-gray-100 rounded-xl p-10 border border-black/10'>
              <div>
                  <span className='inline-block w-full max-w-[100px]'> 
                <Logo width="100%" />
            </span>
              </div>
              <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        
                <p className="mt-2 text-center text-base text-black/60">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/login"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign In
                            </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input 
                         label = "Full Name:"
                          placeholder="Enter your full name"
                          {...register("name",{
                            required:true,
                          })}

                          />

                          <Input 
                        label = "Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email"),{
                            required:true,
                            validate:{
                                matchPattern: (value) => // regular expression(regx)
                                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                                .test(value) || "Email address must be a valid address"

                            }
                        }}
                    /> 

                     <Input 
                        label="password:"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password"),{
                            required:true,
                            validate:{  // apne se kiya hu
                                matchPattern:(value)=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                                .test(value) || "- at least 8 characters<br/>must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number <br/>Can contain special characters"
                            }
                        }}
                    />
                    <Button type='submit' className='w-full'>
                        Sign Up
                    </Button>
                    </div>

                </form>
    
        </div>

        
    </div>
  )
}

export default Signup