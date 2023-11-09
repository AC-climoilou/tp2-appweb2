import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import global from '../Variables';

class Navbar extends Component {

    
    logout()
    {
        global.id = 0;
        localStorage.setItem("logged", "false");
        window.location.href = ("/");
    }
    

    render() {


        global.renderNavbar = () =>
        {
            this.forceUpdate();
        }
        
        if(localStorage.getItem("logged") ===  "false")
        {
        return (
            <nav className="navBar">
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
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
                        <li><NavLink onClick={() => {this.logout()}}>Deconnexion</NavLink></li>
                    </ul>
                </nav>
            )
        }
    }
}

export default Navbar;