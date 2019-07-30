import React from 'react';
import { Route } from 'react-router-dom';
import * as Constants from '../../helpers/Constants';
// import ApiService from '../../helpers/ApiService';
import MainDashboard from './main_dashboard';
import Sidebar from './sidebar';
import CreateUser from './create_user';
import ViewUser from './view_user';
import Reports from './reports';
import NavbarComp from '../navbar';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="row ">
                <div className="col-2 p-0 sidebarcomp">
                    <Sidebar />
                </div> 
                <div className="col-10 p-0">
                    <NavbarComp />
                    <Route exact path="/dashboard" component={MainDashboard} />
                    <Route path={Constants.CREATE_USER_LINK} component={CreateUser} />
                    <Route path={Constants.VIEW_USERS_LINK} component={ViewUser} />
                    <Route path={Constants.REPORTS_LINK} component={Reports} />
                </div>
            </div>
        );
    }
}

export default Dashboard;