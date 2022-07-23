import "./Dialog.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) =>
{
    return(
        <div className={'dialog'}>
            <img className={'avatar-dialog'} src="https://www.meme-arsenal.com/memes/e35bba9c3d2095e1fc22a7d9fffe5f24.jpg" alt="avatar"/>
            <NavLink  to={props.url}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;