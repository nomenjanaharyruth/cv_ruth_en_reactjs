import React from 'react';
import Navigation from './Navigation';
import Languages from './knowedges/Experience';
import Experience from './knowedges/Languages';
import OtherSkills from './knowedges/OtherSkills';
import Hobbies from './knowedges/Hobbies';


const Knowedges = () => {
    return (
        
        <div className="home">
        <Navigation />
             <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
             </div>
        </div>
    );
};

export default Knowedges;