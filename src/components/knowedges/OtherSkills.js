import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h5>ETAT CIVIL</h5>
            <div className="list">
                <ul>
                    <li><i><FaCheckSquare /></i>
                        <span>Né:</span> le 18 juillet 2000 à Ambodinonoka/Andilanatoby</li>
                    <li><i><FaCheckSquare /></i>
                        <span>Situation familliale:</span> Célibataire</li>
                    <li><i><FaCheckSquare /></i>
                        <span>Nationalité:</span> Malagasy</li>
             </ul>

            </div>
        </div>
    );
};

export default OtherSkills;