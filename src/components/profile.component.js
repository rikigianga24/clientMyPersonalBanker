import React, { Component } from "react";
import userService from "../services/user.service";
import {Spinner} from "react-bootstrap";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ""
    };
  }
  
  async componentDidMount(){
    this.setState({
      currentUser: await userService.getCurrentProfile(sessionStorage.getItem("currentCF"))
    });
  }

  render() {
    if(this.state.currentUser===""){
      return(
        <div className="container h-75 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="warning" />
        </div>
      )
    }
    sessionStorage.setItem("currentIBAN",this.state.currentUser.iban)
    var iban = this.state.currentUser.iban.split("/")
    sessionStorage.setItem("iban",iban[3])
    return (
      <div className="container h-75">
          <div className="jumbotron mt-3">
          <h1>Il tuo profilo</h1>
          <hr className="my-4"></hr>
          <strong>Nome: </strong>
          {this.state.currentUser.nome}<br></br>
          <strong>Cognome: </strong>
          {this.state.currentUser.cognome}<br></br>
          <strong>Codice Fiscale: </strong>
          {this.state.currentUser.cf}<br></br>
          <strong>IBAN: </strong>
          {iban[3]}<br></br>
          <strong>Cellulare: </strong>
          {this.state.currentUser.cellulare}<br></br>
          <strong>Indirizzo: </strong>
          {this.state.currentUser.via +" n"+ this.state.currentUser.civico +" ("+ this.state.currentUser.cap+")"}<br></br>
          <strong>E-mail: </strong>
          {this.state.currentUser.email}<br></br>
          </div>
          <div className="alert alert-warning" role="alert">
            <a href="/bankaccount" className="alert-link"> Visita il tuo conto </a>
          </div>
      </div>
    );
  }
}
