import React from 'react';
import './styles-contact-scss'; 

function Contact() {
  return (
    <div className="container">
      <div className="menu">
        <div className="navbar-toggle">
          <i className="fas fa-bars"></i>
        </div>
        <img src="../assets/images/logo.png" alt="Logo UAM" className="logo" />
        <ul className="navbar-options">
          <li><a href="./flex.html">Flexbox</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="./products.html">Products</a></li>
        </ul>
        <div className="avatar-container">
          <img src="../assets/images/avatar.png" className="avatar" alt="Foto de perfil" />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Contact;
