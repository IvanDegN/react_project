import style from "../User/User.module.css";

const User = () =>
{
    return(
        <div>
            <img className={style.avatar} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} alt={'avatar'} />
            description
        </div>
    );
}
export default User;