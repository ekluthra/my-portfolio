import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import './App.css';


function App() {
  return(
    <BrowserRouter>
    <NavBar />
      <Switch>
        {/*doing this 5 times because 5 pages*/}
        <Route component={Home} exact path="/" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Resume} path="/resume" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
