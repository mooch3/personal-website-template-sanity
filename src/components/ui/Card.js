import classes from './Card.module.css';

const Card = ({style, children}) => {
    return (
        <div className={classes.card} style={style}>
            {children}
        </div>
    )
}

export default Card;