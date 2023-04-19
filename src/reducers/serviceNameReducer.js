import { SAVE_SERVICE_NAME } from "../actions/types";
const initialState= {
    serviceName:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case SAVE_SERVICE_NAME:
            return{
                ...state,
                serviceName: action.payload
            }
            default:
                return state
    }
}