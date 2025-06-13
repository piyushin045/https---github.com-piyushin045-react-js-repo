import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>

    )
}

// const  ReactElement = {
//     type: 'a',
//     props:{ // here props is a object
//         href: 'https://google.com',
//         target: '_blank'
//     },children: 'click me to visit google'

// }

const anotherElement = (
    <a href='https://google.com' target='_blank'> visit google</a>
)

const anotherUser ="       ///////\\\\\\\\\\\\chai aur react"

const reactEl = React.createElement(
    'a', // a tag or p tag
    {href:'htttps://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser  // here we canot not write if and if else because it is evaluated expression
    

)

createRoot(document.getElementById('root')).render(
  
   reactEl
  
)
