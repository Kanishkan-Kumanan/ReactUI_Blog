import Home from "./pages/home/Home";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export default function App() {
  const user = true;
  return (
  
    <div className="App">
    
      <Router>
      <Topbar />
      <Switch>
         <Route exact path="/">
            {user ? <Home /> : <Register />}
         </Route>
         <Route  path="/register">
            {user ?<Home /> : <Register />}
         </Route>
         <Route path="/settings">
            <Settings />
         </Route>
         <Route path="/login">
            {user ? <Home /> : <Login />}
         </Route>
         <Route path="/write">
            {user ? <Write /> : <Register />}
         </Route>
         <Route path="/post/:postID">
            <Single />
         </Route>
      </Switch>
      </Router>
    </div>
  );
}
