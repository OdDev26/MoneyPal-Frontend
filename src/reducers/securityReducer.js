import { GET_ERRORS } from "../actions/types";
import { SET_CURRENT_USER } from "../actions/types";

const initialState={
    user:{},
    validToken: false
}

const validatepayload= payload=>{
    if(payload){
        return true
    }
    else{
        return false
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                validToken:validatepayload(action.payload),
                user:action.payload
            }
            default:
                return state
    }
}