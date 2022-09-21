import React from 'react';
import './sidebar.css'
import { Bookmark, Chat, Group, InsertInvitation, PlayCircleFilled, QuestionAnswer, RssFeedOutlined, School, Work } from '@material-ui/icons';
// import ChatIcon from '@mui/icons-material/Chat';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import GroupIcon from '@mui/icons-material/Group';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import WorkIcon from '@mui/icons-material/Work';
// import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
// import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarwapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistItem">
                        <RssFeedOutlined className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">Feed</span>


                    </li>
                    <li className="sidebarlistItem">
                        <Chat className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">
                            Chat
                        </span>

                    </li>
                    <li className="sidebarlistItem">
                        <PlayCircleFilled className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">
                            Video
                        </span>

                    </li>
                    <li className="sidebarlistItem">
                        <Group className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">
                            Group
                        </span>

                    </li>
                    <li className="sidebarlistItem">
                        <Bookmark className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">
                            Bookmark
                        </span>

                    </li>
                    <li className="sidebarlistItem">
                        <QuestionAnswer className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">
                            Question
                        </span>

                    </li>
                    <li className="sidebarlistItem">
                        <Work className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">
                            Job
                        </span>

                    </li>
                    <li className="sidebarlistItem">
                        <InsertInvitation className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">
                            Event
                        </span>

                    </li>
                    <li className="sidebarlistItem">
                        <School className='sidebarIcon'/>
                        <span className="sidebarlistitemtext">
                            Course
                        </span>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;