import React from 'react'
import { Link } from 'react-router-dom'

export default function AddAServiceButton() {
  return (
    <div>
    <Link to="/addservice" className='btn btn-lg btn-danger'>
    Add a service
    </Link>
  </div>
  )
}
