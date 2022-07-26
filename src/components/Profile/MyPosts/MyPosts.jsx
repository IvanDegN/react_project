import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) =>
{
    let ref = React.createRef();
    let addPost = () =>
   {
       props.addPost();
    }
    let UpdateNewPostText = () =>
    {
        let NewPostText = ref.current.value;
        props.UpdateNewPostText(NewPostText);
    }

    let postItem = props.post.map(element => <Post id={element.id} key={element.id} like={element.likesCount} text={element.text}  />)

    return (
        <div className={style.posts}>
            <div className={style.titlePosts}>My posts</div>
            <textarea ref={ref} onChange={UpdateNewPostText} value={props.NewPostText}/>
            <div><button  onClick={addPost}>Add post</button></div>
            <div className={style.newPost}>New post</div>
            {postItem}
        </div>
    );
}

export default MyPosts;