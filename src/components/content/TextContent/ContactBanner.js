import classes from './ContactBanner.module.css';

const ContactBanner = () => {
        return (
            <div className={classes['banner-content']}>
                <h1>Contact Me</h1>
                <ul>
                    <li>Kevin Smith, J.D.</li>
                    <li>Email: email@email.com</li>
                    <li>Tel: +1 657-432-9876</li>
                </ul>
            </div>
        )
}

export default ContactBanner;