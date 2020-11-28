import React from "react";

import Alert from "react-bootstrap/Alert";

const FormError = () => {
  return (
    <Alert variant="danger" onClose={() => console.log("CLOSE")}>
      There was an issue with login
    </Alert>
  );
};

export default FormError;
