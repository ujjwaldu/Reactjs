import React from "react";
import { Common } from "./Common";
import web1 from '../img2.jpg'

const About=()=>{
    return(
        <>
            <Common name='Welcome to About Page' 
          imgs={web1} 
          brand=' Know what we do' 
          btnname='Contact Now'
            btnredirect=''
          />
        </>
    )
};
export default About