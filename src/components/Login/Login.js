import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { login } from "../../redux/actions";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import FormError from "../FormError";

const Login = ({ isLoginIn, loginError, login }) => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [validated, setValidated] = useState(false);
  let history = useHistory();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    if (form.checkValidity()) {
      login(emailInput.current.value, passwordInput.current.value, history);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {loginError && <FormError error={loginError} />}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          ref={emailInput}
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

function mapStateToProps({ login }) {
  return {
    isLoginIn: login.isLoginIn,
    loginError: login.loginError,
  };
}

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
