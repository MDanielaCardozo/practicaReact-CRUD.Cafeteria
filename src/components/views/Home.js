import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CardProducto from "./producto/CardProducto"

const Home = () => {
  const URL = process.env.REACT_APP_API_CAFETERIA;
  console.log(URL);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultaAPI();
  },[])

  const consultaAPI = async () =>{
    try {
      const respuesta = await fetch(URL);
      const listaProductos = await respuesta.json();
      console.log(listaProductos);
      setProductos(listaProductos);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="container">
      <h1 className="display-4 m-4">Pagina principal</h1>
      <hr />
      <Row xs={1} md={4} className="g-4">
        
        {
          productos.map((producto)=><Col key={producto.id}><CardProducto producto={producto}></CardProducto></Col>)
        }
        
      </Row>
    </div>
  );
};

export default Home;
