
import './App.css';
import Header from "./Header/Header";
import Nav from "./NavBar/Nav";
import Profile from "./Profile/Profile";

const App = () => {
  return (
    <div className={'wrapper'}>
        <Header/>
        <Nav/>
        <Profile/>
    </div>
  );
}

export default App;
