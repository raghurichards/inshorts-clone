import React from 'react';
import './NavInshorts.css';
import HamburgerDrawer from './HamburgerDrawer.js';

const NavInshorts = ({setCategory}) => {
    return (
        <div className='nav'>
            <div className='icon'> <HamburgerDrawer setCategory={setCategory}/> </div> 
                         
             <img 
             style={{ cursor: "pointer" }}
             src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
             height="80%" 
             alt="logo"
             />
            
        </div>
    );
};

export default NavInshorts
 