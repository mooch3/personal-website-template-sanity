import classes from './ContactBanner.module.css';

const ContactBanner = () => {
        return (
            <div className={classes['banner-content']}>
                <h1>Contact Me</h1>
                <ul>
                    <li>Kevin Smith, J.D.</li>
                    <li>kevincartersmithinc@gmail.com</li>
                </ul>
            </div>
        )
}

export default ContactBanner;