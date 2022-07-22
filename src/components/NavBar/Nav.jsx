import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () =>
{
    return (
        <nav className={style.nav}>
            <div>
                <NavLink className={style.active} to={'/profile'}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/messages'}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/music'}>Music</NavLink>
            </div>

            <div>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;