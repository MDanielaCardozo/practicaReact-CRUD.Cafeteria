import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const DetalleProducto = () => {

    const {id} = useParams();
    console.log(id);
    const URL = process.env.REACT_APP_API_CAFETERIA;
    const [producto, setProducto] = useState({});

    useEffect(() => {
        consultaAPI();
    },[])

    const consultaAPI = async () => {
        try {
            const respuesta = await fetch(URL+'/'+id);
            const dato = await respuesta.json();
            setProducto(dato);
            
        } catch (error) {
            console.log(error)            
        }
    }
    
    return (
        <Card className='container my-5'>
            <Row className='w-75'>
                <Col md={6}>
                    <img src={producto.imagen} alt={producto.nombreProducto} className="w-100" />
                </Col>
                <Col md={6} className="py-3">
                <h3>{producto.nombreProducto}</h3>
                <hr/>
                <Badge bg="success">{producto.categoria}</Badge>
                <p className='mt-3'><b>Descripcion:</b></p>
                </Col>
            </Row>
        </Card>
    );
};

export default DetalleProducto;