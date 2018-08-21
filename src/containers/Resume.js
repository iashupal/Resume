import React from 'react';
import './Resume.css';
import { Mainpage } from '../components/Mainpage';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Resume = ()=>{
    return(
        <div className="main-page">
            {/* <h1>Web Resume</h1> */}
            <Mainpage/> 
        </div>
       
    )
}