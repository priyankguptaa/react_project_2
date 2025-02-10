import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect( ()=> {
        fetch(`https://api.github.com/users/priyankguptaa`)
        .then(response => response.json())
        .then(data => setData(data))
    },[])

  return (
    <div>
      <h2>Github followers: {data.name}</h2>
      <img src={data.avatar_url} alt="git Picture" srcset="" />
    </div>
  )
}

export default Github
