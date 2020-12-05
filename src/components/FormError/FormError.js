import React from "react";

import Alert from "react-bootstrap/Alert";

const FormError = ({ error }) => {
  return <Alert variant="danger">{error}</Alert>;
};

export default FormError;
