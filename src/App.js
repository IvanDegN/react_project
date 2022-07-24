import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'wrapper'}>
                <Header/>
                <Nav/>
                <div className={'wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile post={props.post}/>}/>
                        <Route path={'/messages/*'} element={<Messages messages={props.messages} dialogInfo={props.dialogInfo}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

);
}

export default App;
