import React from 'react';
import Navigation from '../Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Randriamiarisoa Nomenjanahary Rota</h1>
                    <h2>Curriculum Vitae</h2>
                    <div className="pdf">
                        <a href="../media/CV.pdf" target="_blank">Télecharger
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;