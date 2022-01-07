import React from 'react';
import classes from './Navbar.module.css';
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

const Navbar = () => {
return  <nav className={classes.nav}>
        <div className={classes.item}>
            <a href="/profile">
                Profile
            </a>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <a href="/dialogs">
                Messages
            </a>
        </div>
        <div className={classes.item}>
            <a href="/news">
                News
            </a>
        </div>
        <div className={classes.item}>
            <a href="/music">
                Music
            </a>
        </div>
        <div className={classes.item}>
            <a href="/settings">
                Settings
            </a>
        </div>

</nav>
}

export default Navbar;