import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function Navbarpage() {
  const [deleteShow, setdeleteShow] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Overeact</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <button class="btn btn-primary" onClick={() => setdeleteShow(true)}>
                LogOut
              </button>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={deleteShow} onHide={() => setdeleteShow(false)}>
        <Modal.Header>
          <Modal.Title>logout moedwal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>yakinn kids mau logout???</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setdeleteShow(false)}>Close</Button>
          <Button variant="danger" onClick={logout}>Logout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbarpage;
