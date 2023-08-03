import React from "react";
import { NavLink,Link} from "react-router-dom";
// import '../index.css';
// import { useMatch } from "react-router-dom";

const Navbarb = () => {

 const putstyle=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        borderBottom: isActive? '2px solid white':'',
        color: isActive?'white':''
    }
 }

    return (
        <>
            <div className="container-fluid" style={{backgroundColor:'#206020'}}>
                <div className="row">
                    <div className="col-md-12">


                        <nav className="navbar navbar-expand-lg mr-0">
                            <div className="container-fluid" id="">
                           
                               
                                <img className="image" src="https://cdn.statically.io/gh/mishra-vinay/writeonimage/master/hil.png" alt="" />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                             
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-1 mb-lg-0">
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
                                        <li className="nav-item">
                                            <NavLink style={putstyle} className="nav-link" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={putstyle} className="nav-link" to="/register">Registration</NavLink>
                                        </li>
                                      </ul>
                                    </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
};
export { Navbarb }