import { useState } from 'react';

import classes from './Footer.module.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import ContactForm from './ContactForm';
import useHttp from '../../hooks/use-http';

const Footer = () => {
    const [contacted, setContacted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const {isLoading: sending, error, sendRequest: contactMe} = useHttp();

    const contactRequest = (clientInfo) => {
        contactMe({
            URL: 'https://react-https-cb35d-default-rtdb.firebaseio.com/contact.json',
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: clientInfo})
            setContacted(true)
    }

    const showContactForm = () => {
        setContacted(false);
        setShowForm(true);
    }

    let content = <ContactForm onRequest={contactRequest} />;

    if(contacted){
        content = (
            <div className={classes.contacted}>
                <p>Your message have been sent, I will get back to you soon. Thank you</p>
                <div>
                    <button onClick={showContactForm}>Close</button>
                </div>
            </div>
            )
    }

    else if (showForm){
        content = <ContactForm onRequest={contactRequest} />;
    }

    if(sending){
        content = <p className={classes.sending}>Sending...</p>
    }

    if(error){
        content = <p className={classes.error}>{error}</p>
    }

    return <div id='contact' className={classes.footer}>
        <h2>CONTACT</h2>
        {content}
        <div>
            <h3>Mobile: +234 901 472 6466</h3>
            <p>ochukodick@gmail.com</p>
        </div>
        <div className={classes.links}>
            <a href='https://github.com/dkey01'><img src={github} alt='GitHub profile' /></a>
            <a href='https://www.linkedin.com/in/dkey-ogheneochuko'><img src={linkedin} alt='LinkedIn profile' /></a>
        </div>
    </div>
}

export default Footer;