import style from './Profile.module.css'
import User from "./User/User";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    return (
        <div className={style.content}>
            <img className={style.contentHeader} src={'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000'} alt={'background'} />
            <User/>
            <MyPosts/>
            <Post text={'hi'} like={2}/>
            <Post text={'how are you?'} like={4}/>
            <Post text={'I live in Russia'} like={6}/>
            <Post text={'I go to work today'} like={8}/>
        </div>
    );
}

export default Profile;