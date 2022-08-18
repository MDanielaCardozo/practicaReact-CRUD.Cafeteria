import React from "react";
import { Button, Table } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const AdministrarProductos = () => {
  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        <Button variant="primary">Agregar</Button>
        <hr />
      </div>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod.</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Url de imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/* aqui tengo que hacer un map */}
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </section>
  );
};

export default AdministrarProductos;
