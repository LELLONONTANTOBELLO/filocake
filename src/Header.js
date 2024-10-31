// Header.js
import React from 'react';
import './Header.css';
import logo from './img/logo.png'; // Assicurati di inserire il percorso corretto del logo

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo Filocake" className="logo-img" />
        <h1>Filocake</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#all-products">Tutti Prodotti</a></li>
          <li><a href="#christmas">Natale</a></li>
          <li><a href="#baked">Lievitati</a></li>
          <li><a href="#cakes">Torte Forno</a></li>
          <li><a href="#chocolate">Cioccolato</a></li>
          <li><a href="#lactose-free">Senza Lattosio</a></li>
          <li><a href="#others">Altro</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
