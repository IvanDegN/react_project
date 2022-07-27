import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (
            <div className={'wrapper'}>
                <Header/>
                <Nav state={props.state.NavBar}/>
                <div className={'wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile profilePage={props.state.profilePage}
                                                                   addPost={props.addPost}
                                                                   NewPostText={props.NewPostText}
                                                                   UpdateNewPostText={props.UpdateNewPostText}/>}/>
                        <Route path={'/messages/*'} element={<Messages messagesPage={props.state.messagesPage}
                                                                       addMessage={props.addMessage}
                                                                       UpdateNewMessageText={props.UpdateNewMessageText}
                                                                       NewMessageText={props.state.messagesPage.NewMessageText}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
);
}

export default App;
