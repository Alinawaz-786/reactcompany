import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
// import ReactDOM from 'react-dom';

const Nav = (props) => {


    return (

                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    <a className="navbar-brand">React Axios Tutorial</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/add-new-record"> Add New Profile</Link>
                            </li>
                            <li className="nav-item">
                                {/*<Link className="nav-link" to={"/users"}>Users List</Link>*/}
                            </li>
                        </ul>
                    </div>
                </nav>

        // <ul className="nav navbar-dark">
        //     <li className="nav-item">
        //         <Link to="/add-new-record">
        //             {/*<a className="nav-link disabled" href="#">*/}
        //                 Add New Profile
        //             {/*</a>*/}
        //         </Link>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link disabled" href="#" disabled>Link</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link disabled" href="#">Link</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link disabled" href="#">Disabled</a>
        //     </li>
        // </ul>


    );
}

export default Nav;

