import React from 'react'
import './ErrorPage.css'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
    const navigate = useNavigate()
    const handleErrorPage = ()=>{
        navigate("/")
    }
  return (
    <div className='error-page-con'>
      <img src='https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg' alt="error-page-image"/>
      <button onClick={handleErrorPage}>Back To Home</button>
    </div>
  )
}

export default ErrorPage
