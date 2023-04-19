import React from 'react'
import { Link } from 'react-router-dom'

export default function PaymentTab() {
  return (
    <div>
      <Link className='btn btn-lg btn-info' style={{"width":"20rem"}} to="/payment/form">Pay for service</Link>
    </div>
  )
}
