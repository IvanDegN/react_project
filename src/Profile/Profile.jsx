import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <img className={style.contentHeader} src={'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000'} alt={'background'} />
            <div>
                <img className={style.avatar} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} alt={'avatar'} />
                description
            </div>
            <div className={style.posts}>
                <div className={style.titlePosts}>My posts</div>
                <div className={style.newPost}>New post</div>
                <div className={style.item}>Post 1</div>
                <div className={style.item}>Post 2</div>
            </div>


        </div>
    );
}

export default Profile;