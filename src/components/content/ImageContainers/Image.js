import classes from './Image.module.css';

const Image = (props) => {
    return (
            <img className={classes.image} src={props.image} alt={props.alt}/>

    )
}

export default Image;