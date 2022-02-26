import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetching() {
    const [post,setpost]=useState({})
    const [id,setid]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log(response)
            setpost(response.data)
        })
        .catch(e=>console.log(e))
    },[id])
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setid(e.target.value)}></input>
        <h1>{post.title}</h1>
        {/* <ul>
            {
                posts.map(post=><li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetching