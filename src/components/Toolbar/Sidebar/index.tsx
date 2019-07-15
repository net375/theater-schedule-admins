import React from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';
import inboxLogo from '../../../assets/images/inbox-logo.png';
import sendLogo from '../../../assets/images/send-logo.png';
import formLogo from '../../../assets/images/form-logo.png';

class Sidebar extends React.Component {
    public render() {
        return (
            <div className="sidebar">
                <nav className="nav">
                    <SidebarItem 
                        id={0}
                        name="Вхідні повідомлення"
                        imgSrc={inboxLogo}
                        path=""
                        clicked={null}
                    />
                    <SidebarItem
                        id={1}
                        name="Надіслати повідомлення"
                        imgSrc={sendLogo}
                        path="/sendpost"
                        clicked={null}
                    />
                    <SidebarItem
                        id={2}
                        name="Форма для опитування"
                        imgSrc={formLogo}
                        path=""
                        clicked={null}
                    />
                </nav>
            </div>
        );
    }
}

export default Sidebar;