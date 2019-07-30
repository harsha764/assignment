import React from 'react';
import '../../assets/css/style.css';
import ApiService from '../../helpers/ApiService';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errors: ''
        }
    }

    changeEvent = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    validateData = () => {
        let isFormValid = true;
        if (!(this.state.username)) {
            isFormValid = false;
            this.setState({ errors: "Email field should not be empty" });
            return isFormValid;
        } else {
            isFormValid = false;
            let emailvalid = false;
            let value = this.state.username;
            emailvalid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            if (!emailvalid) {
                this.setState({ errors: "Enter a valid Email" });
                return isFormValid;
            } else {
                isFormValid = true;
            }
        }

        if (!this.state.password) {
            isFormValid = false;
            this.setState({ errors: "Password field should not be empty" });
            return isFormValid;
        }
        return isFormValid;
    }

    loginUser = () => {
        if (this.validateData()) {
            var loginParams = {};
            loginParams.username = this.state.username;
            loginParams.password = this.state.password;
            ApiService.loginAuth(loginParams)
                .then((res) => {
                    if (res.status === 'success') {
                        localStorage.setItem('app', JSON.stringify(res));
                        window.location = '/dashboard';
                    } else {
                        this.setState({ errors: res.status });
                    }
                })
                .catch((err) => {
                    console.log('Login api error, ', err);
                })

        } else {
            this.setState({errors:"Enter Valid Data"}); 
        }
    }

    signUp = () => {
        window.location.href = '/signup';
    }

    render() {
        return (<div className="container logincont mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="mt-4 text-left">
                        <div className="form-group text-center">
                            <h2> Login </h2> </div> <div className="form-group">
                            <label htmlFor="Email"> Email Address </label> 
                            <input type="email"
                                className="form-control"
                                id="Email"
                                name="username"
                                placeholder="Enter Email"
                                onChange={this.changeEvent}
                            /> </div> <div className="form-group">
                            <label htmlFor="Password"> Password </label> <input type="password"
                                className="form-control"
                                id="Password"
                                name="password"
                                placeholder="Enter Password"
                                onChange={this.changeEvent}
                            /> </div> <div className="form-group">
                            <p className="error"> {this.state.errors} </p> </div> <div className="form-group text-center">
                            <button type="button"
                                onClick={this.loginUser}
                                className="btn btn-primary"> Submit </button> </div> <div className="form-group text-center">
                            <label className="new-user"> 
                            New User ? <span onClick={this.signUp}> SignUp </span></label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;