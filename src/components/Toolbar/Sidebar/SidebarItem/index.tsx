import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './SidebarItem.module.css';

interface ISideBarItemProps {
    id: number,
    name: string,
    path: string,
    imgSrc: string,
    clicked: any
}

class SidebarItem extends React.Component<ISideBarItemProps> {
    public render() {
        return (
            <NavLink
                to={this.props.path}
                className={classes.NavItem}
                activeClassName={classes.NavItemActive}
                onClick={this.props.clicked}
            >
                <img src={this.props.imgSrc} alt="" />
                <span>{this.props.name}</span>
            </NavLink>
        );
    }
}

export default SidebarItem;