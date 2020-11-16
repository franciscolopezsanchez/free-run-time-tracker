import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={emailInput}
          onChange={() => setEmail(emailInput.current.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="an-awesome-password"
          ref={passwordInput}
          onChange={() => setPassword(passwordInput.current.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicRaceCode">
        <Form.Label>Race code</Form.Label>
        <Form.Control type="text" placeholder="Race code" />
        <Form.Text className="text-muted">
          Insert the code received in your email this week.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={() => console.log("HolA tio")}>
        Go!
      </Button>
    </Form>
  );
};

export default Login;
