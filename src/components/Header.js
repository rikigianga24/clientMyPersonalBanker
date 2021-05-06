import React from "react";
import {Nav, Navbar, FormControl , Link , Form , Button} from "react-bootstrap"



function Header(){
    return(
        <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">MyPersonalBanker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/account">Gestisci il tuo saldo</Nav.Link>
          <Nav.Link className="d-flex justify-content-right" href="/login">Accedi</Nav.Link>
        </Nav>
      </Navbar>
      </>
    )
    
}
export default Header;