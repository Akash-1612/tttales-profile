import React from 'react';
import logoImage from './images/logo.png';
import './css/navbar.css';

function Nav() {
    return (
        <nav className="navbar">

            <div className="logo-container">
                <img src={logoImage} alt="Company Logo" className="logo-img" />
                <div className="separator">|</div>
                <p className="logo-text">S T O R I E S</p>
            </div>

            <div className="btn">
                <button>Courses</button>
            </div>

        </nav>
    );
}

export default Nav;

