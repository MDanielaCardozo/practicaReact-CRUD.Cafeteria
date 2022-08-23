import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { cantidadCaracteres, validarPrecio } from "./helpers";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
  // crear states
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [msjError, setMsjError] = useState(false);

  const URL = process.env.REACT_APP_API_CAFETERIA;

  const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validar los datos
    if(cantidadCaracteres(nombreProducto) && validarPrecio(precio)){
      setMsjError(false);

    // crear objeto
    const nuevoProducto = {
      nombreProducto,
      precio,
      imagen,
      categoria
    }

    console.log(nuevoProducto);
    // enviar peticion a json-server (API) create
    try{
      const respuesta = await fetch(URL,{
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(nuevoProducto)
      })

      if(respuesta.status === 201){
        Swal.fire(
          'Producto creado',
          'El producto fue agregado correctamente',
          'Succes'
        );
        //redireccionar
        navegacion('/administrar');
      }

      console.log(respuesta)

    }catch(error){
      console.log(error)
    }
  }else{
    setMsjError(true);
  }
};
  

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
      {
        (msjError)?(<Alert variant="danger" className="my-4">Debe corregir los datos</Alert>) : null
      }
      
    </section>
  );
};

export default CrearProducto;
