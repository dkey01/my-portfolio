import classes from "./Experience.module.css";
import ChurchPad from "./ChurchPad";
import ICE from "./ICE";
import Education from "./Education";
import Talosmart from "./Talkosmart";

const Experience = () => {
  return (
    <div id="experience" className={classes.experience}>
      <h2>Experience</h2>
      <ChurchPad />
      <Talosmart />
      <ICE />
      <Education />
    </div>
  );
};

export default Experience;
