import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () =>
{

    let post =
        [
            {id:1, text:'Hi', likesCount:10},
            {id:1, text:'How are you?', likesCount:10},
            {id:1, text:'She has a dog', likesCount:10},
            {id:1, text:'He always does his work in time', likesCount:10},
            {id:1, text:'She watches TV', likesCount:10}
        ]

    let postItem = post.map(element => <Post id={element.id} like={element.likesCount} text={element.text}/>)

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