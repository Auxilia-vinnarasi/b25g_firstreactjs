import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Todo from "./Todo";
  import Login from "./Login";
  import Register from "./Register";
function App() {

    

    return (
        <>
        <Router>
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          
        </Switch>
        </Router>
        </>

        
    );

}

export default App;