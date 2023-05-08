import classes from './Education.module.css';

const Education = () => {

    const university = <h3>University of Benin, Edo State, Nigeria</h3>;
    const studyDuration = <h3>2008 - 2013</h3>;
    const course = <p>Bachelor of Science</p>
    return <>
        <h2>Education</h2>
        <div className={classes['education-detail']}>
            {university}
            {studyDuration}
        </div>
        {course}
    </>
}

export default Education;