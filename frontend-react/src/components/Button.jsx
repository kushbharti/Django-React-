import React from 'react'
import { Link } from 'react-router-dom'


const Button = (probs) => {
  return (
    <>
        <Link className={`btn ${probs.class}`} to={probs.url}>{probs.text}</Link>
    </>
  )
}

export default Button


