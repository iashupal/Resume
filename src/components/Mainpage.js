import React from 'react';
import { Profile } from './content/profile/Profile';
import { Basicinfo } from './content/basic/Basicinfo';
import { Footer } from './content/footer/Footer';
import './Mainpage.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Basicinfo } from './content/Basicinfo';
export const Mainpage = ()=>{
    return(
        // <div>
        //     <h3>About Ashu</h3>
        //     <Profile/>
        // </div>
        // Profile info
        <div className="profile-info">
        <div className="row profile-row">
         <div className="col-lg-4 col-md-12 col-sm-12 profile-pic">
         <Profile/>
         </div>
         {/* profile info finish */}

         {/* basic info start */}
         <div className="col-lg-8 col-md-12 col-sm-12 profile-detail">
             <Basicinfo/>
             <Footer/>
         </div>
        </div>
        
      </div>  
    )
};