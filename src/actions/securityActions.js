import axios from 'axios'
import { GET_ERRORS, GET_REGISTRATION_ERROR, SET_CURRENT_USER } from './types'
import setJWTToken from '../../src/securityUtils/setJWTToken'
import jwt_decode from 'jwt-decode'

export const registerUser=(payload,history)=> async dispatch=>{
    try{
    const res = await axios.post("http://localhost:9000/api/v1/auth/regular/user/register",payload)
    history.push("/registration/success")
   
  }
  catch(err){
    dispatch({
      type: GET_REGISTRATION_ERROR,
      payload: err.response.data
    })
  }
  }

  export const adminLogin= (LoginRequest)=> async dispatch=>{
    try {
      //Make api call to login api
      const res= await axios.post("http://localhost:9000/api/v1/auth/user/login",LoginRequest)
      //extract token from res
      const {token}= res.data
      //store token in the localStorage
      localStorage.setItem("jwtToken",token)
      //set token in header
      setJWTToken(token)
      //decode the token to get user info
      const decodedToken= jwt_decode(token)

     
      //dispatch to securityReducer
      dispatch({
        type: SET_CURRENT_USER,
        payload: decodedToken
      })

    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload:error.response.data
      })
    }
  }

  export const login= (LoginRequest)=> async dispatch=>{
    try {
      //Make api call to login api
      const res= await axios.post("http://localhost:9000/api/v1/auth/user/login",LoginRequest)
      //extract token from res
      const {token}= res.data
      //store token in the localStorage
      localStorage.setItem("jwtToken",token)
      //set token in header
      setJWTToken(token)
      //decode the token to get user info
      const decodedToken= jwt_decode(token)

     
      //dispatch to securityReducer
      dispatch({
        type: SET_CURRENT_USER,
        payload: decodedToken
      })

    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload:error.response.data
      })
    }
  }

 

  export const registerAdmin=(payload,history)=> async dispatch=>{
    try{
    const res= await axios.post("http://localhost:9000/api/v1/auth/admin/register",payload)
    
    history.push("/admin/login")

  }
  catch(error){
    dispatch({
      type: GET_REGISTRATION_ERROR,
      payload: error.response.data
    })
  }
}

  export const logout= ()=> dispatch=>{
    localStorage.removeItem("jwtToken")
    setJWTToken(false)
    dispatch({
      type: SET_CURRENT_USER,
      payload:{}
    })
  }