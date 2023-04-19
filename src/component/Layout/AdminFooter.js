import React, { Component } from 'react'

export default class AdminFooter extends Component {
  render() {
    return (
      <div>
      <div className='row'>
      <p className='col-sm' style={{"backgroundColor":"red","height":"30px","marginLeft":"9px","marginTop":"700px","marginBottom":"0px"}}>
       &copy;{new Date().getFullYear()} MoneyPal | All rights reserved
      </p>
      </div>
      </div>
    )
  }
}
