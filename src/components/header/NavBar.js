import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import classes from './navBar.module.css';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setShowNav(!showNav);
    setMenuIcon(!menuIcon);
  };

  return (
    <nav className={classes.navbar}>
      <h1>OGHENEOCHUKO</h1>
      <div className={classes['navbar-content']}>
        {isMobile && (
          <div className={classes['menu-btn']} onClick={toggleNav}>
            {menuIcon ? <FaTimes /> : <FaBars />}
          </div>
        )}
        <ul className={`${classes['navbar-nav']} ${showNav ? classes['show-nav'] : ''}`}>
          <li className={classes['nav-item']}>
            <a href="#projects">Projects</a>
          </li>
          <li className={classes['nav-item']}>
            <a href="#experience">Experience</a>
          </li>
          <li className={classes['nav-item']}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
