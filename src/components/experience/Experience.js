import classes from './Experience.module.css';
import ChurchPad from './ChurchPad';
import ICE from './ICE';
import Education from './Education';


const Experience = () => {
    return <div id='experience' className={classes.experience}>
        <h2>Experience</h2>
        <ChurchPad />
        <ICE />
        <Education />       
    </div>
}

export default Experience;