import classes from './Banner.module.css';

const Banner = (props) => {
    return (
        <div className={classes['banner-container']}>
            <img className={classes.banner} src={props.image} alt={props.alt} />
        </div>

    )
}

export default Banner