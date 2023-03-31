import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className='notFound'>
           <div className="notFoundContent">
                <h3>Désolé cette page n'existe pas !</h3>
                <NavLink exact to="/">
                    <i><FaHome /></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;