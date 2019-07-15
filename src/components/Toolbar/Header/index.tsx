import React from 'react';
import './Header.css';
import Logo from './Logo';

class Header extends React.Component {
    public render() {
        return (
            <header id="header">
                <Logo text="Театр Ляльок" />
            </header>
        );
    }
}

export default Header;