import { GET_SERVICE_REQUEST_RESPONSE } from "../actions/types";

const initialState={
    serviceRequestResponse:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case  GET_SERVICE_REQUEST_RESPONSE:
            return{
                ...state,
                serviceRequestResponse:action.payload
            }
            default:
                return state
    }

}