import { wait } from "@testing-library/react";
import React, { Component , useState} from "react";
import {Form, Col, Button, Modal} from "react-bootstrap"
import userService from "../services/user.service";
import successScreen from "../functional/success_screen";

export default class Transaction extends Component {

  constructor(props) {
    super(props);
    this.handlePayment = this.handlePayment.bind(this);
    this.onChangeIbanDestinazione = this.onChangeIbanDestinazione.bind(this);
    this.onChangeImporto = this.onChangeImporto.bind(this);
    this.onChangeTipo = this.onChangeTipo.bind(this);

    var m = new Date();
    var dateString =
    m.getUTCFullYear() + "/" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
    
    this.state = { 
      iban_mittente:sessionStorage.getItem("iban"),
      data:dateString,
      importo:"",
      movimento:"Uscita",
      iban_destinatario:"",
      tipo:""
    };
  }

  onChangeImporto(e) {
    this.setState({
      importo: e.target.value
    });
  }

  onChangeIbanDestinazione(e) {
    this.setState({
      iban_destinatario: e.target.value
    });
  }

  onChangeTipo(e) {
    this.setState({
      tipo: e.target.value
    });
  }

  handlePayment(e){
    e.preventDefault();
    userService.postPayment(this.state.iban_mittente,this.state.data,this.state.importo,this.state.tipo,this.state.iban_destinatario)
    userService.sendMail(userService.getIdTransaction(this.state.iban))
    this.props.history.push("/success");
         window.location.reload();
  }
 
  render() {
      
      var iban=sessionStorage.getItem("currentIBAN").split("/")
    return (
   
        <div className="container h-75 d-flex justify-content-center align-items-center">
        <div id="main">
        <Form onSubmit={this.handlePayment}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>IBAN</Form.Label>
            <Form.Control required id="iban_mittente" value={iban[3]} type="text" disabled placeholder={iban[3]}/>
          </Form.Group>
        </Form.Row>
      
        <Form.Group>
          <Form.Label>IBAN destinatario</Form.Label>
          <Form.Control required className="text-center" id="iban_destinatario" onChange={this.onChangeIbanDestinazione} value={this.state.iban_destinatario} placeholder="XX00Y000000000000000000000" />
        </Form.Group>
        <Form.Row>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tipo di operazione</Form.Label>
            <Form.Control id="tipo" required onChange={this.onChangeTipo} value={this.state.tipo} as="select" defaultValue="Choose...">
              <option>Scegli...</option>
              <option>Bonifico SEPA</option>
              <option>Giroconto</option>
              <option>Pagamento On_Line</option>
              <option>Assegno bancario</option>
            </Form.Control>
          </Form.Group>
      
        <Form.Group as={Col}  controlId="formGridZip">
        <Form.Label>Pagamento</Form.Label>
          <div class="input-group">
          <input type="number" required id="importo" onChange={this.onChangeImporto} value={this.state.importo} placeholder="0.00" min="0.00" max="10000" step="0.01" class="form-control"/>
            <div class="input-group-append" >
                <span class="input-group-text">€</span>
            </div>
          </div>
          </Form.Group>
        </Form.Row>
      
        <Button variant="primary" type="submit">
          Conferma
        </Button>
      </Form>
      </div>
      </div>
    );
  }
}
