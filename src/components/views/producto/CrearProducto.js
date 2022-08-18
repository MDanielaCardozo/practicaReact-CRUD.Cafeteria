import React from "react";
import { Form, Button } from "react-bootstrap";

const CrearProducto = () => {
  return (
    <section className="container">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control type="text" placeholder="Ingrese producto" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicE">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicE">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Categorías</Form.Label>
          <Form.Select id="">
            <option>Disabled select</option>
            <option>Disabled select</option>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
