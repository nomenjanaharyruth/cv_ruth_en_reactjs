import React from 'react'
import DarkMode from './pages/DarkMode'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineUserSwitch} from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import {FaFacebook, FaWhatsapp, FaTwitter, FaGithub} from 'react-icons/fa'


const Navigation = () => {

    return (
        
        <div className="sidebar">
        <DarkMode />
            <div className="id">
                <div className="idContent">
                <img src='./rota.jpg' />
                    <h3>Randriamiarisoa Nomenjanahary Rota</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                <li>
                    <NavLink exact to="/" activeClassName="navActive">
                    <i><AiOutlineHome /></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>

                    <li>
                    <NavLink exact to="/competences" activeClassName="navActive">
                    <i><AiOutlineUserSwitch /></i>
                        <span>Competences</span>
                    </NavLink>
                    </li>
 
                    <li>
                    <NavLink exact to="/portfolio" activeClassName="navActive">
                    <i><BiBook /></i>
                        <span>Portfeuille</span>
                    </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i><FaGithub /></i>
                            <span>Contact</span>
                        </NavLink>
                    
                    </li>
                
                </ul>
            </div>

            <div className="socialNetWork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopaner norefarrer"><i ><FaFacebook/></i> </a>
                    </li>

                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopaner norefarrer"><i ><FaGithub/></i> </a>
                    </li>

                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopaner norefarrer"><i ><FaTwitter/></i> </a>
                    </li>

                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopaner norefarrer"><i ><FaWhatsapp/></i> </a>
                    </li>
                    
                </ul>

                <div className="signature">
                    <p>Ruth</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;