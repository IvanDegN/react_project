
import User from "./User/User";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <User/>
            <MyPosts post={props.post} id={props.id}/>
        </div>
    );
}

export default Profile;