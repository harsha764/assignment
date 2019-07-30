import React from 'react';
// import { Link } from "react-router-dom";
// import * as Constants from '../../helpers/Constants';

class Navbar extends React.Component {
    updateAuth = () => {
        localStorage.removeItem('app');
        window.location = '/';
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark  ">
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </li> */}
                    <li className="nav-item">
                        <span onClick={this.updateAuth}>Log Out</span>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;