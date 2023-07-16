import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h2>Whoops!</h2>
        <h2>I don't know this page</h2>
        <Link to={'/'}>
             Go Home
        </Link>
    </div>
  )
}

export default PageNotFound