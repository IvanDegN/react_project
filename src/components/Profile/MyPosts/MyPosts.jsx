import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () =>
{
    return (
        <div className={style.posts}>
            <div className={style.titlePosts}>My posts</div>
            <textarea></textarea>
            <div><button>Add post</button></div>
            <div className={style.newPost}>New post</div>
            <Post text={'hi'} like={2}/>
            <Post text={'how are you?'} like={4}/>
            <Post text={'I live in Russia'} like={6}/>
            <Post text={'I go to work today'} like={8}/>
        </div>
    );
}

export default MyPosts;