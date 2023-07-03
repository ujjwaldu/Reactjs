import React from "react";
import web from '../img1.jpeg'
// import { NavLink } from "react-router-dom";
import { Common } from "./Common";
const Home=()=>{
    return (
        <>
          <Common name='Grow your business with' 
          imgs={web} 
          brand=' My Support' 
          btnname='Get Started' 
            btnredirect='service'
          />
        </>
    )
};
export {Home}