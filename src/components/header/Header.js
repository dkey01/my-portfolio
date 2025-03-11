import classes from "./header.module.css";
import profile from "../../assets/profile.jpg";
import Card from "../../UI/Card";

const Header = () => {
  const aboutMe = (
    <p>
      I'm a highly skilled React front-end developer with over 3 years of
      experience. I possess strong problem-solving skills, impeccable attention
      to detail, and the ability to work effectively both independently and as
      part of a team. My expertise lies in JavaScript, CSS, and HTML, and I have
      extensive experience with React and related technologies, including Redux,
      TypeScript, and Webpack. I am proficient in working with APIs, utilizing
      version control systems like Git, and adhering to agile
      development methodologies.
    </p>
  );
  return (
    <header className={classes.header}>
      <div className={classes["profile-content"]}>
        <div className={classes["header-profile"]}>
          <img src={profile} alt="Profile" />
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
  );
};

export default Header;
