import React from 'react';
import {  FaFacebookF, FaEnvelopeOpen, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';



const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>PROFIL</h3>
            <ul>
                <li className="hobby"><i><FaMapMarkerAlt /></i>
                    <span>Trésors/Morondava</span>
                </li>
                <li className="hobby"><i><FaFacebookF /></i>
                    <span>Ruth'Aina</span>
                </li>
                <li className="hobby"><i><FaEnvelopeOpen/></i>
                    <span>randriamiarisoaruth@gmail.com</span>
                </li>
                <li className="hobby"><i><FaPhone/></i>
                    <span> 0348400037/0322943006</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;