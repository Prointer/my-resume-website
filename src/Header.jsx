import React from 'react'
import HeaderLogo from './assets/header_logo_2.svg'
import './styles.css'

const Header = () => {
  return (
    <header>
      <img src={HeaderLogo} alt='logo' className='header_logo'/>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="social_links__header">
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
        </a>
    </div>
    </header>
  );
};

export default Header;