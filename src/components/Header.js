import React from "react";
import { useEffect } from "react";
import logoimg from "../assets/img/logo.png";
import { Link } from "react-router-dom";
function Headernav() {
  useEffect(() => {
    const handleNavToggleClick = () => {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.add('show-menu');
      }
    };
  
    const handleNavCloseClick = () => {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('show-menu');
      }
    };
  
    const handleLinkClick = () => {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('show-menu');
      }
    };
  
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY >= 100) {
          header.classList.add('scroll-header');
        } else {
          header.classList.remove('scroll-header');
        }
      }
    };
  
    const handleThemeButtonClick = () => {
      const body = document.body;
      const themeButton = document.getElementById('theme-button');
      if (body && themeButton) {
        body.classList.toggle('dark-theme');
        themeButton.classList.toggle('ri-sun-line');
        themeButton.classList.toggle('ri-moon-line');
        console.log(body.classList.contains('dark-theme') ? 'dark' : 'light')
        localStorage.setItem('selected-theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
        localStorage.setItem('selected-icon', themeButton.classList.contains('ri-moon-line') ? 'ri-moon-line' : 'ri-sun-line');
      }
    };
  
    const defaultTheme = localStorage.getItem('selected-theme');
    console.log(defaultTheme)
    if (defaultTheme === 'light') {
      console.log("meme")
      handleThemeButtonClick();
    }
  
    document.getElementById('nav-toggle')?.addEventListener('click', handleNavToggleClick);
    document.getElementById('nav-close')?.addEventListener('click', handleNavCloseClick);
    document.querySelectorAll('.nav__link')?.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });
    window.addEventListener('scroll', handleScroll);
    document.getElementById('theme-button')?.addEventListener('click', handleThemeButtonClick);
  
    return () => {
      document.getElementById('nav-toggle')?.removeEventListener('click', handleNavToggleClick);
      document.getElementById('nav-close')?.removeEventListener('click', handleNavCloseClick);
      document.querySelectorAll('.nav__link')?.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
      window.removeEventListener('scroll', handleScroll);
      document.getElementById('theme-button')?.removeEventListener('click', handleThemeButtonClick);
    };
  }, []);

  return (
    <header className="header" id="header">
       <link
      href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />

      <nav className="nav container">
        <div className="logo_container">
          <img src={logoimg} alt="" className="nav__logo_img" />
          <a href="#" className="nav__logo">
            Inner Peace
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link ">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/teams" className="nav__link">
                Teams
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#place" className="nav__link">
                Articles
              </Link>
            </li>
          </ul>

          <div className="nav__dark">
            <span className="change-theme-name">Dark mode</span>
            <i className="ri-moon-line change-theme" id="theme-button"></i>
          </div>

          <i className="ri-close-line nav__close" id="nav-close"></i>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Headernav;
