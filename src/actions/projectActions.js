import axios from 'axios'
import setJWTToken from '../securityUtils/setJWTToken';

import { GET_ERRORS,GET_SERVICES, GET_FUNDING_ERRORS, GET_SERVICE_REQUEST_RESPONSE,GET_WALLET_DETAILS, SET_CURRENT_USER} from "./types";

export const addService = (serviceName, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:9000/api/v1/admin/add/service", serviceName);
    history.push("/admindashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getServices=()=> async dispatch=>{
  const res= await axios.get("http://localhost:9000/api/v1/user/view/services")
  dispatch({
    type: GET_SERVICES,
    payload:res.data
  })
}

export const getServices1=()=> async dispatch=>{
  const res= await axios.get("http://localhost:9000/api/v1/admin/view/services")
  dispatch({
    type: GET_SERVICES,
    payload:res.data
  })
}



export const fundWallet=(fundingDetails,history)=> async dispatch=>{
  try {
    const res= await axios.post("http://localhost:9000/api/v1/fund/wallet",fundingDetails)
    history.push("/funding/success")

  } catch (error) {
    dispatch({
      type: GET_FUNDING_ERRORS,
      payload:error.response.data
    })
  }
}

export const offerService=(payload,history)=> async dispatch=>{
  try{
    const res= await axios.post('http://localhost:9000/api/v1/offer/service',payload)
    history.push("/offeringservice/success")
  }
  catch(err){
    console.log(err.response.data)
  }
} 

export const requestService=(payload,history)=> async dispatch=>{
  try{
    const res= await axios.post('http://localhost:9000/api/v1/request/service',payload)
    dispatch({
      type: GET_SERVICE_REQUEST_RESPONSE,
      payload: res.data
    })
    history.push("/billinginfo")
  }  catch(err){
    dispatch({
      type: GET_FUNDING_ERRORS,
      payload:err.response.data
    })
  }
} 

export const payForService=(payload,history)=> async dispatch=>{
  try {
    const res= await axios.post("http://localhost:9000/api/v1/pay/for/service",payload)   
   history.push("/successful/payment/view") 
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    })
  }
}

export const getWalletDetails=(usernameOrEmail)=> async dispatch=>{
  const res= await axios.get(`http://localhost:9000/api/v1/get/wallet/details/${usernameOrEmail}`)
  dispatch({
    type: GET_WALLET_DETAILS,
    payload: res.data
  })
}

export const createWallet=(payload,history)=> async dispatch=>{
  try {
    const res= await axios.post("http://localhost:9000/api/v1/create/wallet",payload)
    history.push("/wallet/creation/success")
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    })
  }
 

}



