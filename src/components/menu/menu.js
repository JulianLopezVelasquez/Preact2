import React, { useState, Component } from 'react';
import './stylesMenu.scss'; 
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/avatar.png';
import 'font-awesome/css/font-awesome.min.css';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleToggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div className="menu">
        <div className="navbar-toggle" onClick={this.handleToggleMenu}>
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <img src={Logo} alt="Logo UAM" className="logo" />
        <ul className={`navbar-options ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="./pages/flex.html">Flexbox</a>
          </li>
          <li>
            <a href="./pages/contact.html">Contact</a>
          </li>
          <li>
            <a href="./pages/products.html">Products</a>
          </li>
        </ul>
        <div className="avatar-container">
          <img src={Avatar} className="avatar" alt="Foto de perfil" />
        </div>
      </div>
    );
  }
}

export default Navbar;
