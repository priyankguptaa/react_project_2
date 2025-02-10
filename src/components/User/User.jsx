import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div>
      <h2>user:{userid}</h2>
    </div>
  )
}

export default User
