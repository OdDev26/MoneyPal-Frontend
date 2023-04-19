 import React,{Component}  from 'react';
 import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './component/admin_pages/AdminDashboard';
import "bootstrap/dist/css/bootstrap.min.css"


import AddServiceForm from './component/admin_pages/AddServiceForm';
import {Provider} from 'react-redux'
import store from './store'
import UserDashboard from './component/user_pages/UserDashboard';
import FundWalletForm from './component/user_pages/FundWalletForm';
import AllServices from './component/user_pages/AllServices'
import OfferServiceForm from './component/user_pages/OfferServiceForm';
import RequestServiceForm from './component/user_pages/RequestServiceForm';
import BillingInfo from './component/user_pages/BillingInfo';
import PaymentForm from './component/user_pages/PaymentForm';
import PaymentSuccessView from './component/user_pages/PaymentSuccessView';
import OfferingServiceSuccess from './component/user_pages/OfferingServiceSuccess';
import UserLandingPage from './component/Layout/UserLandingPage';
import UserRegister from './component/authentication/UserRegister';
import UserLogin from './component/authentication/UserLogin'
import jwt_decode from 'jwt-decode'
import {SET_CURRENT_USER} from './actions/types'
import setJWTToken from './securityUtils/setJWTToken';
import {logout} from './actions/securityActions'
import AdminContactPage from './component/admin_pages/AdminContactPage';
import AppManual from './component/AppManual'
import './App.css'
import AboutApp from './component/AboutApp';
import AdminLandingPage from './component/Layout/AdminLandingPage';
import AdminRegister from './component/authentication/AdminRegister';
import AdminLogin from './component/authentication/AdminLogin';
import CreateWalletForm from './component/admin_pages/CreateWalletForm';
import SecuredRoute from './securityUtils/SecuredRoute';
import SecuredRoute1 from './securityUtils/SecuredRoute1';
import WalletCreationSuccessPage from './component/admin_pages/WalletCreationSuccessPage';
import FundingSuccessPage from './component/user_pages/FundingSuccessPage';
import UnvalidatedEmailPage from './component/user_pages/UnvalidatedEmailPage';
import RegistrationSuccess from './component/user_pages/RegistrationSuccess';


class App extends Component {
  render() {
    const jwtToken= localStorage.jwtToken;
    if(jwtToken){
      setJWTToken(jwtToken)
      const decodedToken= jwt_decode(jwtToken)
      store.dispatch({
        type: SET_CURRENT_USER,
        payload: decodedToken
      })
      const currentTime= Date.now()/1000
      if(decodedToken.exp<currentTime){
        store.dispatch(logout())
        window.location.href("/user")
      }
    }
      return(
        <Provider store={store}>
          <Router>
            <div> 
            

              {/**Public routes */}
              <Route exact path="/user" component={UserLandingPage}/>
              <Route exact path="/user/register" component={UserRegister}/>
              <Route exact path="/admin/register"component={AdminRegister} />
              <Route exact path="/admin/login" component={AdminLogin}/>
              <Route exact path="/user/login" component={UserLogin}/>
              <Route exact path="/admin" component={AdminLandingPage}/>
              <Route exact path="/app/manual" component={AppManual}/>
              <Route exact path="/about/moneypal" component={AboutApp}/>
              <Route exact path="/unvalidated/email" component={UnvalidatedEmailPage}/>
              <Route exact path="/registration/success" component={RegistrationSuccess}/>
              <Route exact path="/contact/admin" component={AdminContactPage}/>
              {
                //private routes
              }
            <Switch>   
            <SecuredRoute1 exact path="/admindashboard" component={AdminDashboard}/>  
            <SecuredRoute1 exact path="/addservice" component={AddServiceForm} />
            <SecuredRoute1 exact path="/create/wallet" component={CreateWalletForm}/>
            </Switch> 

            <Switch>
            <SecuredRoute exact path="/userDashboard/:sub" component={UserDashboard}/>
            <SecuredRoute exact path="/fundwallet/:walletName" component={FundWalletForm}/>
            <SecuredRoute exact path="/viewAllServices" component={AllServices}/>
            <SecuredRoute exact path="/offer/service/:serviceName" component={OfferServiceForm}/>
            <SecuredRoute exact path="/request/service/:serviceName" component={RequestServiceForm}/>
            <SecuredRoute exact path="/billinginfo" component={BillingInfo}/>
            <SecuredRoute exact path="/payment/form" component={PaymentForm}/>
            <SecuredRoute exact path="/successful/payment/view" component={PaymentSuccessView}/>
            <SecuredRoute exact path="/offeringservice/success" component={OfferingServiceSuccess}/>
            <SecuredRoute exact path="/wallet/creation/success" component={WalletCreationSuccessPage}/>
            <SecuredRoute exact path="/funding/success" component={FundingSuccessPage}/>
            
           
            </Switch>    
            </div>
          </Router>
        </Provider>
        )
  }
}

export default App;
