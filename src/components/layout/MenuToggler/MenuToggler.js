import classes from "./MenuToggler.module.css"

const MenuToggler = (props) => {
    return (
        <div className={classes['show-nav']} onClick={props.openNav}>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

export default MenuToggler;