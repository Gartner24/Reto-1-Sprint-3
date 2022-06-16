import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavBarStyled } from "../styles/layout/GlobalStyles";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ClearAllOutlinedIcon from "@mui/icons-material/ClearAllOutlined";
import SearchIcon from "@mui/icons-material/Search";
const NavBars = () => {
  return (
    <>
      <NavBarStyled expand="md" className="mb-3 d-flex position-absolute w-100 top-0 left-0">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <Nav.Link href="#action1">Categories</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action3">Shop</Nav.Link>
                <Nav.Link href="#action4">Contact</Nav.Link>
              </Nav>
              <IconButton size="large" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show added cart items"
                color="inherit"
              >
                <Badge badgeContent={1} color="warning">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" color="inherit">
                <ClearAllOutlinedIcon />
              </IconButton>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </NavBarStyled>
    </>
  );
};

export default NavBars;
