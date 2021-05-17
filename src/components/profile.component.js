import React, { Component } from "react";
import AuthService from "../services/auth.service";
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
    if(this.state.currentUser==""){
      return(
        <div className="container h-75 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="warning" />
        </div>
      )
    }
    sessionStorage.setItem("currentIBAN",this.state.currentUser.iban)

    return (
      <div className="container h-75">
          <div className="jumbotron mt-3">
          <h1>Il tuo profilo</h1>
          <hr class="my-4"></hr>
          <strong>Nome: </strong>
          {this.state.currentUser.nome}<br></br>
          <strong>Cognome: </strong>
          {this.state.currentUser.cognome}<br></br>
          <strong>Codice Fiscale: </strong>
          {this.state.currentUser.cf}<br></br>
          <strong>IBAN: </strong>
          {this.state.currentUser.iban}<br></br>
          <strong>Cellulare: </strong>
          {this.state.currentUser.cellulare}<br></br>
          <strong>Indirizzo: </strong>
          {this.state.currentUser.via +" n"+ this.state.currentUser.civico +" ("+ this.state.currentUser.cap+")"}<br></br>
        <p>
        <div class="alert alert-warning" role="alert">
         <a href="/bankaccount" class="alert-link"> Visita il tuo conto </a>
      </div>
         
        </p>
          </div>
      </div>
    );
  }
}
