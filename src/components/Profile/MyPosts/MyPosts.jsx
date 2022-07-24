import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) =>
{



    let postItem = props.post.map(element => <Post id={element.id} key={element.id} like={element.likesCount} text={element.text}/>)

    return (
        <div className={style.posts}>
            <div className={style.titlePosts}>My posts</div>
            <textarea></textarea>
            <div><button>Add post</button></div>
            <div className={style.newPost}>New post</div>
            {postItem}
        </div>
    );
}

export default MyPosts;