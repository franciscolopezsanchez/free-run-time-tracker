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
        <Login />
      </Container>
    </>
  );
}

export default App;
