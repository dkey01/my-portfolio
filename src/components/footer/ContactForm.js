import classes from './ContactForm.module.css';
import useInput from '../../hooks/use-input';
import Card from '../../UI/Card';

const ContactForm = (props) => {
    const {
        value: nameEntered,
        valueIsValid: fullNameIsValid,
        hasError: nameHasError,
        valueChangeHandler: fullNameChangeHandler,
        onBlurValueHandler: onBlurFullNameHandler,
        valueClass: nameClass,
        reset: resetName} = useInput(value => value.trim() !== '', value=> value ? classes['form-invalid'] : classes['form-valid']);

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    
    const {
        value: emailEntered,
        valueIsValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        onBlurValueHandler: onBlurEmailHandler,
        valueClass: emailClass,
        reset: resetEmail} = useInput(value => emailRegex.test(value), value=> value ? classes['form-invalid'] : classes['form-valid']);

    const messageRegex = /^[A-Za-z0-9\s]+$/

    const {
        value: messageEntered,
        valueIsValid: messageIsValid,
        hasError: messageHasError,
        valueChangeHandler: messageChangeHandler,
        onBlurValueHandler: onBlurMessageHandler,
        valueClass: messageClass} = useInput(value => messageRegex.test(value), value=> value ? classes['form-invalid'] : classes['form-valid']);
    

    let formIsValid = false;

    if (fullNameIsValid && emailIsValid && messageIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const clientData = {nameEntered, emailEntered, messageEntered}

        props.onRequest(clientData)

        resetName();
        resetEmail();
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className = {nameClass}>
                    <label htmlFor='name'>Full name</label>
                    <input type='text' id='name'onChange={fullNameChangeHandler} onBlur={onBlurFullNameHandler} value={nameEntered}/>
                    {nameHasError && <p>Please name must be entered</p>}
                </div>
                <div className = {emailClass}>
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' onChange={emailChangeHandler} onBlur={onBlurEmailHandler} value={emailEntered}/>
                    {emailHasError && <p>Please enter a valid e-mail</p>}
                </div>
                <div className = {messageClass}>
                    <label htmlFor='message'>Message</label>
                    <textarea rows='3' cols='2' id='message' onChange={messageChangeHandler} onBlur={onBlurMessageHandler}/>
                    {messageHasError && <p>Please message must be entered</p>}
                </div>
                <div className={classes.actions}>
                    <button type='submit' disabled={!formIsValid}>Send</button>
                </div>
            </form>
        </Card>
    )
}
export default ContactForm;