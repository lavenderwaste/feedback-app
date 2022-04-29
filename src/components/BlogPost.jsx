import React from 'react'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

const BlogPost = () => {

  const status = 200

  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Hello')
    navigate('/about')
  }
  
  if(status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>POST</h1>
      <button onClick={handleClick}>Click</button>
      <Routes>
          <Route path='/show' element={<h1>Hello World!</h1>} />
      </Routes>
    </div>
  )
}

export default BlogPost
