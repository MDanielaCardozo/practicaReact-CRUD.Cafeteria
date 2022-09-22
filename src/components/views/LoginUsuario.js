import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginUsuario = () => {
  return (
    <Form className="container p-5">
      <Form.Group className="mb-3" controlId="formNombreApellido">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="nombre" placeholder="Ingrese nombre y apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
  );
};

export default LoginUsuario;
