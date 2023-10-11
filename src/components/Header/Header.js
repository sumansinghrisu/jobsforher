import React, { useState } from 'react';
import './Header.css';
import logo from '../../Assets/JFH_Start-Restart-Rise.png';
import forever from '../../Assets/Image 324.png';
import Tabs from '../Tabs/Tabs';
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="menu-container">
        <button className="menu-toggle" onClick={() => setMenuOpen(!isMenuOpen)}>☰</button>
        <div className="logo"><img src={logo} alt='logo' /></div>
        <div className="forever"><img src={forever} alt='forever' /></div>
      </div>
      <Tabs />
    </>
  );
}

export default Header;
