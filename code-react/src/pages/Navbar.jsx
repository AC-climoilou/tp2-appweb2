import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import global from '../Variables';

class Navbar extends Component {
    
    

    render() {
        global.renderNavbar = () =>
        {
            this.forceUpdate();
        }


        
        if(global.id === 0)
        {
        return (
            <nav className="navBar">
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/calendrier/">Calendrier</NavLink></li>
                </ul>
            </nav>
        );
        }
        else
        {
            return(             
                <nav className="navBar">
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/calendrier/">Calendrier</NavLink></li>
                        <li><NavLink>Deconnexion</NavLink></li>
                    </ul>
                </nav>
            )
        }
    }
}

export default Navbar;