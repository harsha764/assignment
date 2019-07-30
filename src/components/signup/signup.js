import React from 'react';
import ApiService from '../../helpers/ApiService';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username :'',
            password :'',
            errors :''
        }
    }
    emailChangeEvent = (e)=>{
        // let emailvalid = false;
        // let value =this.state.username;
        // const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        // const result = pattern.test(value);
        // // emailvalid =  value.match(/^[a-zA-Z]+$/);
        // console.log(result);
        // if(!emailvalid){
        //     console.log('not validated');
        //     this.setState({errors:"Enter a valid Email"}); 
        // }else{
        //     console.log('validated');
            this.setState({
                username : e.target.value,
                errors:""
            });
        // }
    }

    passwordChangeEvent = (e)=>{
        this.setState({
            password : e.target.value
        });
    }

    repasswordChangeEvent = (e)=>{
        let password = this.state.password;
        let repass = e.target.value;
        if(password === repass){

            this.setState({
                password : password,
                errors : ""
            }); 
        }else{
            this.setState({
                errors : "Passwords Don't Match"
            });
        }
    }

    signUpUser =() => {
        console.log(this.state);
        if(this.state.username !== '' && this.state.password !== ''){
            var signupParams = {};
            signupParams.username = this.state.username;
            signupParams.password = this.state.password;
            signupParams.type = "requesting";
            ApiService.SignupUser(signupParams)
                .then((res) => {
                    console.log(res);
                        if(res.status === 'created'){
                            this.props.history.push('/login'); 
                        }else{
                            this.setState({errors: res.status});     
                        }
                })
                .catch((err) => {
                    console.log('Signup api error, ', err);
                })
        }else{
            this.setState({errors: 'Enter a valid email'});
        }

        
    }
    logIn =()=>{
        this.props.history.push('/login'); 

    }

    render(){
        return(
            <div className="container logincont mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="mt-4 text-left">
                            <div className="form-group text-center">
                                <h2>SignUp</h2>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email Address</label>
                                <input type="email" className="form-control" id="Email" placeholder="Enter Email"
                                    onChange={this.emailChangeEvent}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control" id="Password" placeholder="Enter Password" 
                                    onChange={this.passwordChangeEvent}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-Password">Re-password</label>
                                <input type="password" className="form-control" id="re-Password" placeholder="Re-enter Password" 
                                    onChange={this.repasswordChangeEvent}
                                />
                            </div>
                            <div className="form-group">
                                <p className="error">{this.state.errors}</p>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" onClick={this.signUpUser} className="btn btn-primary">Sign Up</button>
                            </div>
                            <div className="form-group text-center">
                                <label className="new-user">Already have account? <span onClick={this.logIn}> Login </span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;