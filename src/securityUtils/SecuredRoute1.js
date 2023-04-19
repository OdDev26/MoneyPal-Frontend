import React from "react";
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const SecuredRoute1= ({
    component: Component, security,...otherProps}) =>(
        <Route {...otherProps} render={props=>security.validToken===true?(
            <Component {...props}/>
        ):(
            <Redirect to="/admin/login"/>
        )}
        />
    )

SecuredRoute1.prototypes={
    security: PropTypes.object.isRequired
}    
const mapStateToProps= state=>({
    security: state.security
})

export default connect(mapStateToProps)(SecuredRoute1)