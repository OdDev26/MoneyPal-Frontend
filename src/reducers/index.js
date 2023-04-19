import { combineReducers } from "redux";
import genericErrorReducer from "./genericErrorReducer";
import serviceReducer from "./serviceReducer";
import fundingerrorsReducer from "./fundingerrorsReducer";
import serviceRequestReducer from "./serviceRequestReducer";
import walletReducer from "./walletReducer";
import registrationErrorReducer from "./registrationErrorReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
    errors:genericErrorReducer,
    services:serviceReducer,
    funding_errors: fundingerrorsReducer,
    serviceRequestResponse: serviceRequestReducer,
    walletDetails: walletReducer,
    registrationError: registrationErrorReducer,
    security: securityReducer
})