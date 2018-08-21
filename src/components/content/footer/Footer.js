import React from 'react';
import './Footer.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

export const Footer =()=>{
    return(
        <div className="footer">
        <div className="footer-social-icons">
        <ul className="list-unstyled">
            <li>
                <a href="https://twitter.com/" className="twitter"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
                <a href="https://www.facebook.com/" className="facebook"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
                <a href="#" className="google-plus"><i class="fa fa-google-plus"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/" className="instagram"><i class="fa fa-instagram"></i></a>
            </li>
           
        </ul>
        </div>
        <div className="footer-last-para">
            <p>Copyright &copy; 2018 WebResume. All right reserved.</p>
        </div>
          
        </div>
    )
}