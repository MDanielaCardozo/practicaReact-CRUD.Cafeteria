import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemProducto from "./ItemProducto";

const AdministrarProductos = () => {

  const URL = process.env.REACT_APP_API_CAFETERIA;
  console.log(URL);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  },[])

  const consultarAPI = async () =>{
    // peticion get
    try{
      // codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const listaProductos = await respuesta.json();
      console.log(respuesta);
      console.log(listaProductos);
      setProductos(listaProductos);

    }catch(error){
      console.log(error);
      // agregar un mensaje intuitivo para el usuario
    }
  }

  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        <Link to='/administrar/producto/crear' className="btn btn-primary">Agregar</Link>
      </div>
      <hr />
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
          {
            productos.map((producto)=><ItemProducto key={producto._id} producto={producto} consultarAPI={consultarAPI}></ItemProducto>)
          }
        </tbody>
      </Table>
    </section>
  );
};

export default AdministrarProductos;
