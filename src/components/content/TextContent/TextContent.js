import { NavLink } from 'react-router-dom';
import classes from './TextContent.module.css';

const TextContent = (props) => {
    return (
        <div className={classes['text-content']}>
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            {!props.noBtn && <NavLink to={`/${props.header === 'Inner Healing' ? 'inner-healing' : props.header.toLowerCase()}`} className={classes.btn}>{props.header}</NavLink>}
            
        </div>
    )
}

export default TextContent;