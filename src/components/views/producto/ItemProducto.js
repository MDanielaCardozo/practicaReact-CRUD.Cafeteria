import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemProducto = ({producto}) => {

    console.log(producto);
    const{nombreProducto, id, categoria, imagen, precio} = {...producto}
    const URL = process.env.REACT_APP_API_CAFETERIA;

    const handleDelete = () => {
      Swal.fire({
        title: 'Esta seguro de borrar este producto?',
        text: "No puede volver este paso atras!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'borrar'
      }).then( async (result) => {
        if (result.isConfirmed) {

          //realizar la peticion para elimar producto DELETE
          try{
            const parametros = {
              method: "DELETE"
            }
            const respuesta = await fetch(URL+'/'+id,parametros);
            if(respuesta.status === 200){
              Swal.fire(
                'Producto eliminado!',
                'Su producto fue correctamente eliminado',
                'success'
              )
              //recargar la  tabla de productos
            }
    
          }catch(error){
            console.log(error)
          }

          
        }
      })
    }

  return (
      <tr>
        <td>{id}</td>
        <td>{nombreProducto}</td>
        <td>{precio}</td>
        <td className="truncate">{imagen}</td>
        <td>{categoria}</td>
        <td>
          <Button variant="warning">Editar</Button>
          <Button variant="danger" onClick={handleDelete}>Borrar</Button>
        </td>
      </tr>
  );
};

export default ItemProducto;
