import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import AdministrarProductos from './components/views/producto/AdministrarProductos';
import CrearProducto from './components/views/producto/CrearProducto';
import EditarProducto from './components/views/producto/EditarProducto';
import Error404 from './components/views/Error404';
import Home from './components/views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/views/Home.css'
import DetalleProducto from './components/views/DetalleProducto';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/administrar' element={<AdministrarProductos></AdministrarProductos>}></Route>
          <Route exact path='/administrar/producto/crear' element={<CrearProducto></CrearProducto>}></Route>
          <Route exact path='/administrar/producto/editar/:id' element={<EditarProducto></EditarProducto>}></Route>
          <Route exact path='/administrar/producto/detalle/:id' element={<DetalleProducto></DetalleProducto>}></Route>
          <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
