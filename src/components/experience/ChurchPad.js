import classes from './ChurchPad.module.css';

const ChurchPad = () => {

    const churchPad = <h3>ChurchPad, Columbia, MD, United States (Mid-Level, Remote)</h3>
    const churchPadDate = <h3>2022 - Present</h3>

    const churchPadExperience = <ul>
        <li>Developed a church management platform technology solution as part of a 5-person team.</li>
        <li>Working collaboratively with a team of 5 front-end engineers, I led the development of 25 reusable components, resulting in a 35% increase in UI consistency across the application.</li>
        <li>Successfully implemented 5 new features, including a real-time chat function and a customized dashboard, resulting in a 30% increase in user engagement and a 20% increase in retention rate.</li>
        <li>Engineered a responsive user interface that improved load time by 40% and reduced bounce rates by 15%.</li>
        <li>Mentored and coached a team of 6 members, resulting in a 40% increase in overall productivity and a 50% reduction in errors.</li>
    </ul>
    return <>
        <div className={classes['churchPad-detail']}>
            {churchPad}
            {churchPadDate}
        </div>
        {churchPadExperience}
    </>
}

export default ChurchPad;