import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Knowedges from './components/Knowedges'
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';



const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        
        <Route path="/competences" Component={Knowedges} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/contact" Component={Contact} />
        <Route Component={NotFound} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
