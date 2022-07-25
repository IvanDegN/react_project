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
                        <Route path={'/profile'} element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path={'/messages/*'} element={<Messages state={props.state.messagesPage}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
);
}

export default App;
