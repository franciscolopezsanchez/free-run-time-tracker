import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { startLogin } from "../../redux/actions";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import FormError from "../FormError";

import axios from "axios";

const Login = ({ isLoginIn, startLogin }) => {
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
      startLogin();

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
          setFormError(false);
        })
        .catch((error) => {
          setFormError(true);
        });
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {formError && <FormError />}
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
      <Button variant="call-to-action" type="submit">
        {isLoginIn ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          <span>Go!</span>
        )}
      </Button>
    </Form>
  );
};

function mapStateToProps(state) {
  const { login } = state;
  return { isLoginIn: login.isLoginIn };
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
