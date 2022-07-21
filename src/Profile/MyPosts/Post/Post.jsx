import style from "../Post/Post.module.css"

const Post = (props) =>
{
    return (
        <div className={style.item}>
            <img className={style.avatar} src={'https://www.meme-arsenal.com/memes/e35bba9c3d2095e1fc22a7d9fffe5f24.jpg'} alt={'avatar'} />
            <span>message: {props.text}</span>
            <p>likes: {props.like}</p>
        </div>
        );
}
export default Post;