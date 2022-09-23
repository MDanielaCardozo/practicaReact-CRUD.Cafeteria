import { Navigate } from "react-router-dom";


const RutaProtegida = ({children}) => {
    const token = JSON.parse(localStorage.getItem('tokenCafe')) || null

    if(!token){
        return <Navigate to={'./login'}></Navigate>
    }else{
        return children
    }
};

export default RutaProtegida;