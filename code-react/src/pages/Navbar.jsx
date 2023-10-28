import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navBar">
                <ul>
                    <li><NavLink to="/">Connexion</NavLink></li>
                    <li><NavLink to="/accueil/">Accueil</NavLink></li>
                    <li><NavLink to="/calendrier/">Calendrier</NavLink></li>
                    <li><NavLink to="/addEvent/">TestAddEvent</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;