import './App.css';
import { contact } from './personalInfo';

function ContactMe_tmp(props) {
    const handleClick = () => {
        if (props.link) {
            window.open(props.link, '_blank');
        }
    };

    return (
        <div className = "contact-item">
            <h3>{props.ways}</h3>
            <div className = "contact-content" onClick = {handleClick} style = {{cursor:'pointer'}}>
                {props.contents}
            </div>
         </div>
    );
};

function ContactMe() {
    return (
        <div className = "contact-section">
            <h2 id = "Contact">联系我</h2>
            <div className = "contact-grid">
                {contact.map((item,index) => (
                    <ContactMe_tmp
                        key = {index}
                        ways = {item.ways}
                        contents = {item.contents}
                        link = {item.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContactMe;