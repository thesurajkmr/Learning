import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts,setposts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            setposts(response.data)
        })
        .catch(e=>console.log(e))
    })
  return (
    <div>
        <ul>
            {
                posts.map(post=><li key={post.id}>{post.title}</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching