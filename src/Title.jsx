import './App.css'

function Sunleo1230({ props }) {
    // A function to set My Name.
    return (
        <>
            {/** Hey Main() */}
            <span className="sunleo">{props}</span>
        </>
    );
};

function Title() {
    return (
        <div className = "welcome-title">
            <h1>欢迎来到<Sunleo1230 props="sunleo1230" />的个人主页</h1>
        </div>
    );
};

export default Title;