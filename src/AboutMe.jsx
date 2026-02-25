import { personalInfo } from './personalInfo';
import './App.css';
import meImage from './image/小号头像.jpg';

function AboutMe() {
    // A function to introduce me.
    return (
        <div className = "about-section">
            <h2 id = "About">关于我</h2>
            <div className = "about-content">
                {/**text area */}
                <div className = "about-text">
                    {personalInfo.introduction.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                
                {/**image area */}
                <div className = "about-image">
                    <img src = {meImage} alt = {personalInfo.name} />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;