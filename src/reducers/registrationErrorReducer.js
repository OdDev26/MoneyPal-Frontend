import { GET_REGISTRATION_ERROR } from "../actions/types";

const initialState={
    registrationError:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case  GET_REGISTRATION_ERROR:
            return{
                ...state,
                registrationError:action.payload
            }
            default:
                return state
    }
}