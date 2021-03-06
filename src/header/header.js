import React from 'react';
import './header.css';
function Nav(){
    return(
        <div className="navbar_main">
            <div className="netflix_logo">
            <img src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png" alt="neflix_logo" height="60px"></img>
            <div className="nav_right">UNLIMITED TV SHOWS & MOVIES
                <button className="btn_join_now"> <a  className="links"  href="https://www.netflix.com/ph/">JOIN NOW</a></button>
                <button className="btn_sign"><a  className="links"  href="https://www.netflix.com/ph/login">SIGN IN</a></button>
                
            </div>
            </div>
        </div>
    );
}
export default Nav