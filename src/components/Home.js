import React from "react";
import Nav from "./navbar";
import './css/Home.css';
import Cover from '../components/images/img.jpg';
import Profile from '../components/images/prof.jpeg';
import Star from '../components/images/star.png';
import Like from '../components/images/like.png';
import Eyes from '../components/images/eyes.png';
import Heart from '../components/images/heart.png';
import Premium from '../components/images/paid.png';
import Verified from '../components/images/verified.png';
import Tales from './tales';


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
                <h1>
                    Akash Yadav
                    <img src={Premium} alt="Premium" className="png" />
                    <img src={Verified} alt="Verified" className="png" />
                </h1>
            </div>

            <div className="fol-btn">
                <div className="num">
                    <button> 1256 </button>
                    <button> 238 </button>
                </div>
                <div className="lbl">
                    <span>Following</span>
                    <span>Followers</span>
                </div>

            </div>

            <div className="bio">
                <h3>लेख के अनंत सागर में, किनारा हेरता एक लेखक।</h3>
                <a href="https://www.instagram.com/KuchToRakhenge/" target="_blank" rel="noreferrer"> https://instagram.com/KuchToRakhenge </a>
            </div>

            <div className="icons">
                <span title="Starred"><img src={Star} alt="Star" className="png" /> 911</span>
                <span title="Like"><img src={Like} alt="Like" className="png" /> 139</span>
                <span title="Read"><img src={Eyes} alt="Eyes" className="png" /> 420K</span>
                <span title="Heart"><img src={Heart} alt="Heart" className="png" /> 69K</span>
            </div>

            <div>
                <Tales />
            </div>

        </div>
    );
}

export default Home;