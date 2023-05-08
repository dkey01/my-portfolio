import classes from './Footer.module.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
    return <footer id='contact' className={classes.footer}>
        <h2>CONTACT</h2>
        <div>
            <h3>Mobile: +234 901 472 6466</h3>
            <p>ochukodick@gmail.com</p>
        </div>
        <div className={classes.links}>
            <a href='https://github.com/dkey01'><img src={github} alt='GitHub profile' /></a>
            <a href='https://www.linkedin.com/in/dkey-ogheneochuko'><img src={linkedin} alt='LinkedIn profile' /></a>
        </div>
    </footer>
}

export default Footer;