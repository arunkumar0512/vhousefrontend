import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/Inventory'>Inventory</Link>
                <Link to='/Manageitem'>Manageitem</Link>
                <Link to='/Additem'>Additem</Link>
            </nav>
            
        </div>
    );
};

export default NavBar;