import classes from './Conclusion.module.css'

const Conclusion = () => {

    const inConclusion = <h2>My passion lies in crafting visually engaging and user-friendly websites that seamlessly blend aesthetics with functionality. With my expertise in HTML, CSS, and JavaScript, I strive to enhance the digital experiences of clients and employers by delivering high-quality, responsive designs and intuitive user interfaces that leave a lasting impression.</h2>
    return<div className={classes.conclusion}>
        {inConclusion}
    </div>
}

export default Conclusion;