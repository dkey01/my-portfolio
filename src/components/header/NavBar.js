import classes from './navBar.module.css';

const NavBar = () => {
    return (
      <nav className={classes.navbar}>
        <h1>OGHENEOCHUKO</h1>
        <ul className={classes['navbar-nav']}>
          <li className={classes['nav-item']}>
            <a href="#projects" >Projects</a>
          </li>
          <li className={classes['nav-item']}>
            <a href="#experience">Experience</a>
          </li>
          <li className={classes['nav-item']}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };
  

export default NavBar;