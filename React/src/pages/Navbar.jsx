import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Connexion</NavLink></li>
                    <li><NavLink exact to="/accueil/">Accueil</NavLink></li>
                    <li><NavLink exact to="/calendrier/">Calendrier</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;