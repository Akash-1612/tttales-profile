import React from "react";
import Nav from "./navbar";
import './css/Home.css';
import Cover from '../components/images/img.jpg';
import Profile from '../components/images/prof.jpeg';

function Home() {
    return (
        <div>

            <div className="nav">
                <Nav />
            </div>

            <div className="image">
                <img src={Cover} alt="cover" className="cover" />
                <img src={Profile} alt="Profile" className="profile" />
            </div>

            <div className="prof-details">
                <h1 className="name">Akash Yadav 💎 ✅</h1>
            </div>

            <div className="fol-btn">
                <label>
                    <button> 1256 </button>
                    <span>Following</span>
                </label>
                <label>
                    <button> 238 </button>
                    <span>Followers</span>
                </label>

            </div>

            <div className="bio">
                <h3></h3>
            </div>

        </div>
    );
}

export default Home;