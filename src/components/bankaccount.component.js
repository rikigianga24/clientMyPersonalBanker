import React, { Component } from "react";
import AuthService from "../services/auth.service";
import userService from "../services/user.service";
import {Spinner, Badge, Row, Col} from "react-bootstrap"
import "../transaction.css"


export default class BankAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBankInfos: "",
      transazioni:"",
      attivo:false
    };
  }
  
  async componentDidMount(){
    this.setState({
      currentBankInfos: await userService.getBankAccountInfos(sessionStorage.getItem("currentIBAN")),
      transazioni: await userService.getAllTransactionFromIBAN(sessionStorage.getItem("iban"))
    });
  }

  render() {
    if(this.state.currentBankInfos=="" && this.state.transazioni==""){
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
        <div class="alert alert-warning" role="alert">
            <a href="/profile" class="alert-link"> Torna al profilo </a>
        </div>
        <div className="jumbotron">
          <h2>Transazioni</h2>
            <hr class="my-4"></hr>
            {this.state.transazioni.map(transaction => {
              if(transaction.movimento=="Entrata"){
                return (
                  <>
                    <div className="card border-success">
                      <div className="text-success">
                        <h4><strong>{transaction.movimento}</strong></h4>
                      </div>
                      <Row>
                        <Col><strong>ID: </strong>{transaction.id}</Col>
                        <Col><strong>Data: </strong>{transaction.data}</Col>
                      </Row>
                      <Row>
                        <Col><strong>Movimento: </strong>{transaction.movimento}</Col>
                        <Col><strong>Importo:</strong>+{transaction.importo}€</Col>
                      </Row>
                      <Row>
                      <Col><strong>Tipo di pagamento: </strong>{transaction.tipo}</Col>
                      <Col><strong>IBAN provenienza: </strong>{transaction.ibanDestinatario}</Col>
                      </Row>
                      
                      <br></br>
                      
                    </div>
                  </>
                  )
              }else{
                return (
                  <>
                    <div className="card border-danger">
                      <div className="text-danger">
                        <h4><strong>{transaction.movimento}</strong></h4>
                      </div>
                      <Row>
                        <Col><strong>ID: </strong>{transaction.id}</Col>
                        <Col><strong>Data: </strong>{transaction.data}</Col>
                      </Row>
                      <Row>
                        <Col><strong>Movimento: </strong>{transaction.movimento}</Col>
                        <Col><strong>Importo:</strong>-{transaction.importo}€</Col>
                      </Row>
                      <Row>
                      <Col><strong>Tipo di pagamento: </strong>{transaction.tipo}</Col>
                      <Col><strong>IBAN destinazione: </strong>{transaction.ibanDestinatario}</Col>
                      </Row>
                      
                      <br></br>
                      
                    </div>
                  </>
                  )
              }
           
          })}
        </div>
        </div>
        
    );
  }
}
