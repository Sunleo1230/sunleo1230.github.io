import './App.css';

function FastGo() {
    return (
        // title
        <>
            {/** Nav part. */}
            <nav className = "navbar">
                <img className = "logo" />
                <ul className = "nav-menu">
                    <li><a href = "#Top">首页</a></li>
                    <li><a href = "#About">关于我</a></li>
                    <li><a href = "#Works">作品</a></li>
                    <li><a href = "#Skills">技术栈</a></li>
                    <li><a href = "#Contact">联系我</a></li>
                    <li><a href = "#Tosay">提建议</a></li>
                </ul>
            </nav>
        </>
    );
};

export default FastGo;