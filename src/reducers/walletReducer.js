import { GET_WALLET_DETAILS } from "../actions/types";

const initialState= {
    walletDetails:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_WALLET_DETAILS:
            return {
                ...state,
                walletDetails:action.payload
            }
            default:
                return state
    }
}