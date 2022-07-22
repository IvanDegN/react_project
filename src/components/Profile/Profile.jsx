import style from './Profile.module.css'
import User from "./User/User";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            <img className={style.contentHeader} src={'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000'} alt={'background'} />
            <User/>
            <MyPosts/>
        </div>
    );
}

export default Profile;