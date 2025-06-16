import React from 'react'
import { useParams } from 'react-router-dom'
function Users() {
    const {userid} = useParams(100)
  return (
    <div  className ='bg-gray-600 text-white text-3xl p-4'>Users:{userid}</div>
  )
}

export default Users
