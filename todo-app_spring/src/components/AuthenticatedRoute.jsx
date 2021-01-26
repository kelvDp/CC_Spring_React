import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import AuthService from "../AuthService";

class AuthRoute extends Component {
    render() { 

        const isLoggedIn = AuthService.isLoggedIn();

        if (isLoggedIn) {
            return <Route {...this.props}/>;
        } else {
            return <Redirect to="/login"/>
        }
    }
}
 
export default AuthRoute;