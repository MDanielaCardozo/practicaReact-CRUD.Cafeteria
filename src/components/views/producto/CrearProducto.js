import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { cantidadCaracteres, validarPrecio } from "./helpers";

const CrearProducto = () => {
  // crear states
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar los datos
    if(cantidadCaracteres(nombreProducto) && validarPrecio(precio)){
      console.log('los datos son correctos crear el objeto')
    }else{
      console.log('solicitar que cargue los datos correctamente')
    }
    // crear objeto
    // enviar peticion a json-server (API) create
  }

  return (
    <section className="container">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese producto"
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicE">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter email"
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicE">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={(e) => setImagen(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Categorías</Form.Label>
          <Form.Select onChange={e => setCategoria(e.target.value)}>
            <option value=''>Seleccione una opcion</option>
            <option value='bebida-caliente'>Bebida caliente</option>
            <option value='bebida-fria'>Bebida fria</option>
            <option value='dulce'>Dulce</option>
            <option value='salado'>Salado</option>
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
