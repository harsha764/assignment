import React from 'react';
import { Link } from "react-router-dom";
class Sidebar extends React.Component{
    constructor(){
        super()
        this.state = {
            toggle : false,
            active : undefined
        }
        
    }
    componentDidMount(){
        this.setState({
            active: window.location.pathname
        });
    }
    isActive(value){
        return ((this.state.active === value) ? "active" : '') ;
    }
    makeActive =(value)=>{
        this.setState({active:value})
    }

    render(){
        return(
            <div className="sidebar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <h4>Application Name</h4>
                        </div>
                    </div>
                </div>
                <ul>
                    <Link to="/dashboard/" onClick={() => this.makeActive('/dashboard/')}><li className= {this.isActive('/dashboard/')}>Over View</li></Link>
                    <Link to="/dashboard/create_users" onClick={() => this.makeActive('/dashboard/create_users')}><li className= {this.isActive('/dashboard/create_users')}>Create User</li></Link>
                    <Link to="/dashboard/view_users" onClick={() => this.makeActive('/dashboard/view_users')}><li className= {this.isActive('/dashboard/view_users')} >View Users</li></Link>
                    <Link to="/dashboard/reports" onClick={() => this.makeActive('/dashboard/reports')}><li className= {this.isActive('/dashboard/reports')}>User Reports</li></Link>
                </ul>
            </div>
        );
    }
}
export default Sidebar;