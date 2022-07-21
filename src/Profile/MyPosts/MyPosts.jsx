import style from "../MyPosts/MyPosts.module.css"

const MyPosts = () =>
{
    return (
        <div className={style.posts}>
            <div className={style.titlePosts}>My posts</div>
            <textarea></textarea>
            <div><button>Add post</button></div>
            <div className={style.newPost}>New post</div>
        </div>
    );
}

export default MyPosts;