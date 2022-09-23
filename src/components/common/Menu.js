import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("tokenCafe");
    setUsuarioLogueado({});
    navigate("/");
  };

  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cafeteria
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-item nav-link">
              Inicio
            </NavLink>
            {usuarioLogueado.nombre ? (
              <>
                <NavLink end to="/administrar" className="nav-item nav-link">
                  Administrar
                </NavLink>

                <NavLink
                  end
                  to="/administrar/producto/crear"
                  className="nav-item nav-link"
                >
                  Crear
                </NavLink>
                <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end to="/login" className="nav-item nav-link">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
