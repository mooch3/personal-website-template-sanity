import classes from './Contact.module.css';
import { useState } from 'react';


import ContactBanner from '../components/content/TextContent/ContactBanner';
import Form from '../components/form/Form';
import Card from '../components/ui/Card';

const Contact = () => {
    const [isContact, setIsContact] = useState(false);

    const clickHandler = () => {
        setIsContact(prevValue => !prevValue);
    }

    return (
        <>
            <ContactBanner/>
            <Card>
                {isContact ? <Form /> : <button onClick={clickHandler} className={classes.centered}>Contact Me</button>}
            </Card>


        </>
    )
}

export default Contact;