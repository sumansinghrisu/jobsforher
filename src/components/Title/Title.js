import React, { useState } from 'react';
import './Title.css';
import tileIcon from '../../Assets/go-back-left-arrow.svg'; 
function Title() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="title-container">
      <div className="titleIcon"><img src={tileIcon} alt='logo'/></div>
      <div className="title-header"><h2>My Account</h2></div>
    </div>
  );
}

export default Title;
