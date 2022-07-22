import style from './Nav.module.css'

const Nav = () =>
{
    return (
        <nav className={style.nav}>
            <div>
                <a className={style.active} href={'/profile'}>Profile</a>
            </div>
            <div>
                <a href={'/messages'}>Messages</a>
            </div>
            <div>
                <a href={'/news'}>News</a>
            </div>
            <div>
                <a href={'/music'}>Music</a>
            </div>

            <div>
                <a href={'/settings'}>Settings</a>
            </div>
        </nav>
    );
}

export default Nav;