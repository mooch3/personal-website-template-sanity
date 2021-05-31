import classes from './ContactBanner.module.css';

const ContactBanner = () => {
        return (
            <div className={classes['banner-content']}>
                <h1>Contact</h1>
                <ul>
                    <li>Kevin Smith</li>
                    <li>Email: email@email.com</li>
                    <li>Tel: +1-805-907-1111</li>
                </ul>
            </div>
        )
}

export default ContactBanner;