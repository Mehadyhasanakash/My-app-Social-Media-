import React from 'react';
import './topvar.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Topvar = () => {
    return (
        <div className='topvar-container'>
            {/* logo */}
            <div className="topvar-left">
                <span className="logo">Socal Media</span>
            </div>
            {/* center */}
            <div className="topvar-center">
                <div className="searchbar">
                    <SearchIcon className='searchIcone'/>
                    <input placeholder='Search for friend, post or video' className="searchInput" />

                </div>
            </div>
            {/* right */}
            <div className="topvar-right">
                <div className="topbarLink">
                    <spam className="topbarLink">Home</spam>
                    <spam className="topbarLink">Timeline</spam>
                </div>
                {/* icon */}
                <div className="topbarIcon">
                    <div className="topbarIconItem">
                        <PersonIcon/>
                        <span className="topIConBage">1</span>

                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon/>
                        <span className="topIConBage">3</span>

                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon/>
                        <span className="topIConBage">1</span>

                    </div>
                </div>
                <img src="/assetes/person/1.jpeg" alt="" className="topbarImage" />
            </div>
            
        </div>
    );
};

export default Topvar;