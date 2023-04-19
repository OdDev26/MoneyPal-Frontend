import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class AppManual extends Component {
    render(){
  return (
    <div>
      <h1 style={{"color":"red","textAlign":"center"}}>How to use app</h1><br/>
      <div style={{"fontSize":"11px"}} className='manual_paragraphs'>
      <p><strong>Step 1:</strong></p>
      <p>Create an account by clicking on sign up</p>
      <p><strong>Step 2:</strong></p>
      <p>Login into your account</p>
      <p><strong>Step 3:</strong></p>
      <p>Contact admin by clicking on contact admin at page bottom or at page header to create a wallet for you, you would need this wallet to pay for services and receive payment for services offered</p>
      <p><strong>Step 4:</strong></p>
      <p>Click on view all services tab to view all services that can be offered or rendered on this app, You can also contact admin to suggest extra services that can be added</p>
      <p><strong>Step 5:</strong></p>
      <p>If you are offering a service just provide your email after clicking on the button.If you are requesting a service just provide your email after clicking on the button, and make sure to copy the invoice no if you intend to pay using this app</p>
      </div>
    </div>
  )
}
}
export default AppManual
