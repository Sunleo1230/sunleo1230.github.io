import React, { useState } from 'react';
import './App.css';

function ToSayForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const dealLongMessage = (message) => {
        if (message.length > 100) {
            return message.substring(0, 100) + '...';
        };

        if(message.length > 1024*18) {
            console.log('文本长度不能超过18k');
            return;
        };

        return message;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // backend code is not here (now)
        // console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        alert('留言提交成功！');
    };

    const processedMessage = dealLongMessage(formData.message);
        if(processedMessage !== formData.message) {
            setFormData(prevData => ({
                ...prevData,
                message: processedMessage
            }));
        }

    return (
        <div className="tosay-section">
            <h2 id="Form">有什么想说的？</h2>
            <form className="tosay-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">你的名字</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="请输入你的名字"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">邮箱地址</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="请输入你的邮箱"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">留言内容</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="请输入你想说的话..."
                        rows={5}
                    ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                    提交留言
                </button>
            </form>
        </div>
    );
};

export default ToSayForm;