import React from 'react';
import HeaderStyles from './Header.module.css'

const Header = () => {
    return ( 
        <nav className={HeaderStyles.navBar}>
            <h1>Rick and Morty App</h1>
        </nav>
     );
}
 
export default Header;