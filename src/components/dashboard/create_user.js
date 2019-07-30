import React from 'react';
import ApiService from '../../helpers/ApiService';
import swal from 'sweetalert';

class createUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username :'',
            password :'',
            errors :''
        }
    }
    emailChangeEvent = (e)=>{
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

    signUpUser =() => {
        if(this.state.username !== '' && this.state.password !== ''){
            var signupParams = {};
            signupParams.username = this.state.username;
            signupParams.password = this.state.password;
            signupParams.type = 'requesting';
            ApiService.SignupUser(signupParams)
                .then((res) => {
                        if(res.status === 'created'){
                            this.setState({
                                username:'',
                                password:''
                            })
                            swal('User Created Sucessfully');
                        }else{
                            this.setState({errors: res.status});     
                            swal('Please try again');
                        }
                })
                .catch((err) => {
                    console.log('Signup api error, ', err);
                })
        }else{
            swal('All fields are mandatory');
        }
    }
    render(){
        return(
            <div className="container logincont mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="mt-4 text-left">
                            <div className="form-group text-center">
                                <h2>Create User</h2>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email Address</label>
                                <input type="email" className="form-control" id="Email" value={this.state.username} placeholder="Enter Email"
                                    onChange={this.emailChangeEvent}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control" id="Password" value={this.state.password} placeholder="Enter Password" 
                                    onChange={this.passwordChangeEvent}
                                />
                            </div>
                            <div className="form-group">
                                <p className="error">{this.state.errors}</p>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" onClick={this.signUpUser} className="btn btn-primary">Create User</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default createUser;