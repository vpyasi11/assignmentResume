import React from 'react'
import { Navigate } from 'react-router-dom'

function Home() {
  return (
    <Navigate to="/admin"></Navigate>
  )
}

export default Home