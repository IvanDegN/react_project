import style from './Nav.module.css'

const Nav = () =>
{
    return (
        <nav className={style.nav}>
            <div>
                <a className={style.active} href={'#'}>Profile</a>
            </div>
            <div>
                <a href={'#'}>Messages</a>
            </div>
            <div>
                <a href={'#'}>News</a>
            </div>
            <div>
                <a href={'#'}>Music</a>
            </div>

            <div>
                <a href={'#'}>Settings</a>
            </div>
        </nav>
    );
}

export default Nav;