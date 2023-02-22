import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">Ardwick Plumbing</h1>
        <nav className="header__menu">
          <ul>
            <li className="header__menu-item"><p >Home</p></li>
            <li className="header__menu-item"><p >Shop</p></li>
            <li className="header__menu-item"><p >Contact</p></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
