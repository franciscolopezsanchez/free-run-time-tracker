import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Logo from "./components/Logo";
import Container from "react-bootstrap/Container";

import "./App.scss";

function App() {
  return (
    <>
      <header className="App_header">Time Tracker</header>
      <Container className="App">
        <Logo />
        <Router>
          <Switch>
            <Route path="/about">
              <div>about</div>
            </Route>
            <Route path="/users">
              <div>USERS</div>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
