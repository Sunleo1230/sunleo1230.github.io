import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutMe from './AboutMe';
import FastGo from './FastGo';
import Title from './Title';
import Works from './Works';
import Skills from './Skills';
import ContactMe from './ContactMe';
import ToSayForm from './ToSay';
import Footer from './Footer';

function App() {
    return (
        <div className = "content">
            <FastGo />
            <Title />
            <AboutMe props = "sunleo1230"/>
            <Works />
            <Skills />
            <ContactMe />
            <ToSayForm />
            <Footer />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

console.log(`
┌─────────────────────────┐
│ 🎉 sunleo's Console 🎉 │
│    Code with passion!   │
└─────────────────────────┘
`);