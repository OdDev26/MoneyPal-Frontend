import React, { Component } from 'react'

export default class WalletCreationSuccessPage extends Component {
    redirect(){
        this.props.history.push("/admindashboard")
      }
      render() {
        return (
          <div>
          <div><h1>Wallet created successfully</h1></div>
          {setTimeout(() => {
            this.redirect()
          }, 2000)}
          </div>
        )
      }
     }