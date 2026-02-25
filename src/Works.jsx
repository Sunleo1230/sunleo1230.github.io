import React, { useState } from 'react';
import './App.css';
import { works } from './personalInfo';

function Works_temp({ name, description, link ,lang }) {
    // temp function
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className = "works-grid">
            <div className = "work-item">
                <div className="like-button">
                    <button onClick={handleLike}>
                        👍 {likes}
                    </button>

                    <button>
                        {lang}
                    </button>
                </div>
                <div className = "work-content">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className = "work-link">
                        <a href = {link} target = "_blank" rel = "noopener noreferrer">
                            查看项目
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Works() {
    // the real function.
    return (
        <div className = "works-section">
            <h2 id = "Works">我的作品</h2>
            <Works_temp name = {works[0].name} description = {works[0].description} link = {works[0].link} />
            <Works_temp name = {works[1].name} description = {works[1].description} link = {works[1].link} />
            <Works_temp name = {works[2].name} description = {works[2].description} link = {works[2].link} />
        </div>
    );
};

export default Works;