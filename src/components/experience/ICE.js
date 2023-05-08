import classes from './ICE.module.css';

const Ice = () => {

    const ice = <h3>ICE Commercial Power, Lagos, Nigeria(Junior, On-Site)</h3>
    const iceDate = <h3>2020 - 2022</h3>
    const iceExperience = <ul>
        <li>Created a comprehensive web application for managing farmers and their produce, resulting in a 40% increase in productivity and a 50% reduction in administrative costs.</li>
        <li> The application enabled farmers to track their crops, manage their inventory, and communicate with buyers, leading to a 60% increase in sales and a 30% decrease in waste.</li>
        <li>Conducted user testing on the application, receiving an overall satisfaction score of 9/10 from 50 participants.</li>
        <li>Collaborated with a team of 5 developers to deliver the project within a tight deadline, resulting in an on-time delivery rate of 100%.</li>
        <li>Tested, debugged, and shipped 10s of 1000s of lines of code to various development teams. This lead to 100% bug-free deployment.</li>
        <li>Effectively managed version control through Git, maintaining over 100 code repositories and ensuring smooth collaboration and timely project delivery.</li>
        <li>Contributed to the success of a Scrum development team by actively participating in sprint planning, daily stand-up meetings, and sprint retrospectives, resulting in a 30% increase in team productivity.</li>
        <li>Additionally, optimized the application's performance, improving website load time by 25% and reducing bounce rates by 10%.</li>
    </ul>
    return <>
        <div className={classes['ice-detail']}>
            {ice}
            {iceDate}
        </div>
        {iceExperience}
    </>
}

export default Ice;