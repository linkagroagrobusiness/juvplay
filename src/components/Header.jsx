import React from 'react';
import icon from '../assets/imgs/icon.jpg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content container py-3">
      <Link to='/'> 
      <div className="header-logo">
          <img src={icon} alt="Logo" />
        </div>
      
      </Link>
        
        <div className="header-context">
          <span><strong className='logotipo'>JuvePlay</strong> – Educação para uma comunidade saudável.</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
