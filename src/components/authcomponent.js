import React from 'react';
import { withRouter } from "react-router-dom";

class AuthComponent extends React.Component{
    componentWillMount(){
    let auth = JSON.parse(localStorage.getItem('app'));
    if(auth !== null){
        const jwt = auth.jwt_token;
        if(jwt === ''){
            console.log('no jwt found');
            this.props.history.push('/login');
        }else{
            this.props.history.push('/dashboard');
        }
    }else{
        this.props.history.push('/login');
    }
    }
    render(){
        return(
            <div></div>
        );
    }
}

export default withRouter(AuthComponent);