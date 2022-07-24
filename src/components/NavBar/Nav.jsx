import './Nav.css'
import {NavLink} from "react-router-dom";
import FriendsItem from "./Friends/FriendsItem";

const Nav = (props) => {


    let friendItem = props.state.friends.map(element => <FriendsItem name={element.name} id={element.id} key={element.id} url={element.url}/>)

    return (
        <div>
            <nav className={'nav'}>
                <div>
                    <NavLink to={'/profile'}>Profile</NavLink>
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

            <div >
                <div className={'friendsTitle'}>
                    Friends
                </div>
                <div className={'friendsWrapper'}>
                    {friendItem}
                </div>
            </div>
        </div>
    );
}
export default Nav;