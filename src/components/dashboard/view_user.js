import React from 'react';
import ApiService from '../../helpers/ApiService';
import swal from 'sweetalert';

class viewUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[],
            delete:''
        }
    }

    componentDidMount(){
        ApiService.getUsers()
            .then((res) => {
                    if(res !== null){
                        let usersdata = res;
                        this.setState({
                            users:usersdata
                        })
                    }else{
                        console.warn("No data found");     
                    }
            })
            .catch((err) => {
                console.log('Get Users api error, ', err);
            })   
    }
    
    removeUser = (userid) =>{
        var userParams = {};
        userParams.id = userid;
        ApiService.deleteUser(userParams)
            .then((res) => {
                    if(res.data !== null){
                        this.setState({
                            users:res.users
                        })
                        swal(res.data)
                    }else{
                        swal(res.data)
                    }
            })
            .catch((err) => {
                console.log('Remove Users api error, ', err);
            }) 
    }

    viewUser = (userid) =>{
        var userParams = {};
        userParams.id = userid;
        ApiService.viewUser(userParams)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log('Remove Users api error, ', err);
            }) 
    }




    render(){
        return(
            <div className="container logincont mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Users List</h2>
                    </div>
                    <div className="col-md-12 text-left">
                        <table className="w-100 userstable table ">
                            <thead>
                                <tr>
                                    <th>
                                        Sr.no
                                    </th>
                                    <th>
                                        User Id
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map((item,i)=> (
                                <tr key={item.id}>
                                    <td>{i+1}</td>    
                                    <td >{item.id}</td>
                                    <td>{item.name}</td>
                                    <td className="actionbtn"><button className="btn btn-info" onClick={()=>this.viewUser(item.id)}>View</button> <button className="btn btn-danger" onClick={()=>this.removeUser(item.id)}>Delete</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default viewUser;