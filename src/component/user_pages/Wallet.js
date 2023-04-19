import React, { Component } from 'react'
import FundWalletButton from './FundWalletButton'

export default class Wallet extends Component {
   
  render() {
      const {wallet}= this.props
      
    return (
      <div className="card card-body bg-light mb-3 text-center" style={{width:'60rem'}}>
      <div className="col-lg-6 col-md-4 col-8 text-center ">
               <h5><strong>Wallet name: </strong><span style={{"color":"blue"}}>{wallet.walletName}</span></h5>
              <h6>Balance: ₦{wallet.balance}</h6><FundWalletButton walletName={wallet.walletName}/>
            </div>
            </div>
        
  )
  }
}
