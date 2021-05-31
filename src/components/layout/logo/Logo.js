import classes from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <h1>KS</h1>
            <div className={classes['logo-text']}>Kevin Smith</div>
        </div>
    )
}

export default Logo;