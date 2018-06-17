import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Tooltip from 'react-tooltip-lite';
// import { Tooltip } from 'react-lightweight-tooltip';
import {Home} from './home/Home';
import {About} from './about/About';
import {Contact} from './contact/Contact';

import {Cv} from './cv/Cv';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Basicinfo.css';


export const Basicinfo = ()=>{
    return(
      
      <Router>
        <div className="content-div">
          <div className="content-icons d-none d-md-block">
            <div className="content-inner-div">
                   <ul className="list-unstyled">
                     <li>
                       <Link to={"/"} data-toggle="tooltip" data-placement="right" title="HOME">
                         <i className="fa fa-home"></i>
                       </Link>
                                         
                     </li>
                     <li>
                       <Tooltip Content="ABOUT US" direction="right" tagName="span" className="target">
                       <Link to={"/about"}>
                         <i className="fa fa-user-circle"></i>
                       </Link>
                       </Tooltip>
                       
                     </li>
                     <li>
                       <Link to={"/cv"} data-toggle="tooltip" data-placement="right" title="RESUME">
                         <i className="fa fa-file-text">
                         </i>
                       </Link>
                      
                     </li>
                     <li>
                       <Link to={"contact"} data-toggle="tooltip" data-placement="right" title="CONTACT">
                         <i className="fa fa-map-marker">
                         </i>
                       </Link>
                      
                     </li>
                   </ul>
            </div>       
                   
          </div>

          {/* mobile-view menu */}
          <div className="content-info"> 
          <div className="content-mob-menu d-block d-md-none">
          <i className="fa fa-bars" data-toggle="collapse" href="#collapseOne"></i>
          <div className="content-icons collapse mob-icons-div" id="collapseOne">
            <div className="content-inner-div mob-inner-div">
                   <ul className="list-unstyled">
                     <li>
                       <Link to={"/"} data-toggle="tooltip" data-placement="right" title="HOME">
                         <i className="fa fa-home"></i>
                       </Link>
                                         
                     </li>
                     <li>
                       <Tooltip Content="ABOUT US" direction="right" tagName="span" className="target">
                       <Link to={"/about"}>
                         <i className="fa fa-user-circle"></i>
                       </Link>
                       </Tooltip>
                       
                     </li>
                     <li>
                       <Link to={"/cv"} data-toggle="tooltip" data-placement="right" title="RESUME">
                         <i className="fa fa-file-text">
                         </i>
                       </Link>
                      
                     </li>
                     <li>
                       <Link to={"contact"} data-toggle="tooltip" data-placement="right" title="CONTACT">
                         <i className="fa fa-map-marker">
                         </i>
                       </Link>
                      
                     </li>
                   </ul>
            </div>       
                   
          </div>
          </div>
         
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} />
          <Route path="/cv" component={Cv} />
          <Route path="/contact" component={Contact} />     
         
        
        
        </div>
        </div>
      </Router>    
    );
 
}