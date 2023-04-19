import React,{Component} from 'react'

import { Link } from 'react-router-dom'

export default class FundWalletButton extends Component {
render(){
  const {walletName}= this.props
  return (
    <div>
      <Link className='btn btn-lg btn-danger' style={{"width":"20rem"}} to={`/fundwallet/${walletName}`}>Fund</Link>
    </div>
  )
}
}