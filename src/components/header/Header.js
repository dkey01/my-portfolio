import NavBar from "./NavBar";
import classes from './header.module.css';
import profile from '../../assets/profile.jpg';
import Card from '../../UI/Card';


const Header = () => {
    const aboutMe = <p>I'm driven by the endless possibilities of creating dynamic and interactive web experiences for users across various devices. My journey into front-end development began during my internship at Jerukeno Resources Ltd, where I was tasked with updating the company's website. As I dove into the project, I found myself fascinated by the power of front-end technologies to bring websites to life and improve the user experience. Since then, I've invested my time and energy in mastering HTML, CSS, and JavaScript, continually exploring new frameworks and tools that allow me to create visually stunning and highly functional websites. I'm passionate about creating seamless user experiences and am dedicated to staying up-to-date with the latest trends and practices in front-end development.</p>
    return <header className={classes.header}>
        <NavBar />
        <div className={classes['profile-content']}>
            <div className={classes['header-profile']}>
                <img src={profile} alt='Profile_picture'/>
                <h3>Ogheneochuko Duvwarovwo</h3>
                <p>Front-End Developer</p>
            </div>
            <div className={classes.aboutMe}>
                <Card>
                    <h2>About Me</h2>
                    {aboutMe}
                </Card>
            </div>
        </div>
    </header>
}

export default Header;