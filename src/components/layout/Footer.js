import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <h3>Connect with me on <a href="facebook.com">Facebook</a> and <a href="linkedIn.com">LinkedIn</a></h3>
            <p>Designed and Developed by DCS Web Solutions</p>
        </div>
    )
}

export default Footer;