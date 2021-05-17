import React, { Component } from "react";
import AuthService from "../services/auth.service";
import userService from "../services/user.service";
import {Spinner, Badge} from "react-bootstrap"

export default class BankAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBankInfos: "",
      attivo:false
    };
  }
  
  async componentDidMount(){
    this.setState({
      currentBankInfos: await userService.getBankAccountInfos(sessionStorage.getItem("currentIBAN"))
    });
  }

  render() {
    if(this.state.currentBankInfos==""){
      return(
        <div className="container h-75 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="warning" />
        </div>
      )
    }
    if(this.state.currentBankInfos.stato==true){
      var stato=<Badge variant='success'>Attivo</Badge>
    }
    else{
      var stato=<Badge variant='danger'>Disattivo</Badge>
    }
    return (
      <div className="container">
        <header className="jumbotron mt-3">
        <h2>Il tuo conto</h2>
          <hr class="my-4"></hr>
        <h2>
        <strong>Saldo attuale: </strong>
        {this.state.currentBankInfos.saldo}€<br></br>
        </h2>
       
        <strong>IBAN: </strong>
        {this.state.currentBankInfos.iban}<br></br>
        <strong>Stato: </strong>
        {stato}
        <br></br>
        </header>
        
      </div>
    );
  }
}
