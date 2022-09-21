import React from 'react';
import Feet from '../../compronents/feet/Feet';
import Rightbar from '../../compronents/rightbar/Rightbar';
import Sidebar from '../../compronents/Sidebar/Sidebar';
import Topvar from '../../compronents/topvar/Topvar';
import "./home.css"

const Home = () => {
    return (
        <>
        <Topvar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feet/>
            <Rightbar/>
        </div>
        
        </>
    );
};

export default Home;