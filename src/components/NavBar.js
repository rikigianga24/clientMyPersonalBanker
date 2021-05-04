import React from "react";
import {Nav, Navbar, FormControl , Link , Form , Button} from "react-bootstrap"



function NavBar(){
    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">myPersonalBanker</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features">Gestisci il tuo saldo</Nav.Link>
      <Nav.Link href="#pricing">Transazione</Nav.Link>
    </Nav>
  </Navbar>
      </>
    )
    
}
export default NavBar;