import style from "./User.module.css";

const User = () =>
{
    return(
        <div>
            <img className={style.contentHeader} src={'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000'} alt={'background'} />
            <img className={style.avatar} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} alt={'avatar'} />
            description
        </div>
    );
}
export default User;