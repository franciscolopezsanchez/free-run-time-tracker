import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axios from "axios";

const Login = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    if (form.checkValidity()) {
      const user = {
        user: {
          email: email,
          password: password,
        },
      };
      axios
        .post("http://127.0.0.1:3000/users/sign_in", user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          ref={emailInput}
          onChange={() => setEmail(emailInput.current.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Password"
          autoComplete="an-awesome-password"
          ref={passwordInput}
          onChange={() => setPassword(passwordInput.current.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your password.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicRaceCode">
        <Form.Label>Race code</Form.Label>
        <Form.Control type="text" placeholder="Race code" required />
        <Form.Control.Feedback type="invalid">
          Please enter the code received this week in an email.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Insert the code received in your email this week.
        </Form.Text>
      </Form.Group>
      <Button variant="call-to-action" type="submit">
        Go!
      </Button>
    </Form>
  );
};

export default Login;
