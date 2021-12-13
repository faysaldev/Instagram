import './App.css';
import Feed from './components/Feed';
import Header from './components/Header'
import Story from './components/Story';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Profile from './components/Profile';

function App() {



window.addEventListener("load",function(){
document.querySelector(".preloader").classList.add("hide");
})


  return (
      <Router>
    <div className="app">

    <div className="preloader">
      <img src="/spinner.gif" alt="" />
    </div>

        <Header />


      <Switch>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/">
          <Story />
          <Feed />

        </Route>

      </Switch>




    </div>
      </Router>
  );
}

export default App;
