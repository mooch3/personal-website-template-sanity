import classes from './TextBanner.module.css';

const TextBanner = (props) => {
    return (
        <div className={classes['text-banner']}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default TextBanner;