import React from "react";
import { NavLink,Link} from "react-router-dom";
// import '../index.css';
// import { useMatch } from "react-router-dom";

const Navbar = () => {

 const putstyle=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        borderBottom: isActive? '1px solid #565387':''
    }
 }

    return (
        <>
            <div className="container nav_bg">
                <div className="row">
                    <div className="col-md-10">


                        <nav className="navbar navbar-expand-lg mr-0">
                            <div className="container-fluid">
                            {/* <div className="row">
                                <div className="col-md-6"> */}
                               
                                <Link className="navbar-brand" to="#">Ujjwal's Website</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                </div>
                            {/* </div> */}
                            {/* <div className="col-md-6"> */}
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink style={putstyle} className="nav-link " aria-current="page" to='/'>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={putstyle} className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={putstyle} className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={putstyle} className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={putstyle} className="nav-link" to="/listing">Listing</NavLink>
                                        </li>
                                    </ul>
                                    {/* </div> */}
                                {/* </div> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
};
export { Navbar }