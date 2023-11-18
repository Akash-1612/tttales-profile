import React from 'react';
import './css/tales.css';
import tale from './tales.json';

function Tales() {
    return (
        <div>
            {tale.map((index) => (
                <div key={index.title} className="tales-card">
                    <h1>{index.title}</h1>
                    <p>{index.tales}</p>
                    <div className="meta">
                        <span className="date">{index.date}</span>
                        <span className="time">{index.time} min read</span>
                        <span className="views">{index.views} views</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tales;
