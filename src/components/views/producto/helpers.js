export const cantidadCaracteres = (input) => {
   if( input.length >=2 && input.length <= 20){
    return true; //dato correcto
   }else{
    return false; //dato incorrecto
   }
}

export const validarPrecio = (dato) =>{
    let patron = /^[\d]{1,4}$/;
    if(patron.test(dato)){
        return true
    }else{
        return false
    }
}