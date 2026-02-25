import './App.css';

function Skills() {
    return (
        <div className="skills-section">
            <h2 id = "Skills">我的技术栈</h2>
            <div className="skills-grid">
                <div className="skill-item">
                    <div className="skill-info">
                        <h3>前端开发</h3>
                        <p>HTML, CSS, JavaScript, React</p>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-info">
                        <h3>后端开发</h3>
                        <p>Node.js, Express, sqlite</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
