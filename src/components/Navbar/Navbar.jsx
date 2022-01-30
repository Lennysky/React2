import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
//console.log(classes);

//класс 1 сидит в одной переменной.
//let class1 = "item";
//класс 2 сидит в другой переменной.
//let class2 = "active";
//мы могли бы сделать так, чтобы получить итоговую строку "item active":
//let classess = class1 + " " + class2;

//у нас есть классы:
//let classes = "item active";

//будем делать шаблонными строками и эту же запись можем сделать таким образом:
//мы в строку внедрили джс-код. Пробел - пробел, а class1, class2 - переменные.
//let classesNew = `${classes.item} ${classes.active}`;
const dynamicClassName = () => {
    return (
    navData => navData.isActive ? classes.active : classes.item
    )
}


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>
                    Profile
                </NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" className = {dynamicClassName()} >
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className = {dynamicClassName()}>
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className = {dynamicClassName()}>
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className = {dynamicClassName()}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;