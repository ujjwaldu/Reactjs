import React from "react";
// import web from '../img1.jpeg'
import { NavLink } from "react-router-dom";
const Common=(props)=>{
    return (
        <>
           <section id="header" className="d-flex align-items-center">
            <div className="container nav_bg">
                <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.name} <strong className="navbar-brand">{props.brand}</strong></h1>
                            <h3 className="my-3">We are the team of talented developers making Websites</h3>
                            <div className="mt-3">
                                <NavLink to={props.btnredirect} className="btn btn-get-started">{props.btnname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgs} className="img-fluid animated" alt="home img"/>
                        </div>
                </div>
            </div>
           </section>
        </>
    )
};
export {Common}