import React from 'react'
import { Redirect } from 'react-router-dom'
import ck from '../utils/cookies';

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = ck.getToken;

        return isAuthenticated ? (
            <Component />
        ) : (
                <Redirect to={{ pathname: '/home' }} />
            );
    }
}

export default ProtectedRoute;