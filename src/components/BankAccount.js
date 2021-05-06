import React from "react";
import axios from "axios";
import { Row , Col } from "react-bootstrap";

class BankAccount extends React.Component{
 
    render(){
        /*
        getMoneyToDisplay => {
            const config = {
                headers: { 'Authorization': 'BEARER '+'' }
            }
            axios
            .get(`http://localhost:8000/conto_correntes/`, config)
            .then((res) => {
              console.log(res);
              console.log(res.data);
              if (res.status == 200) {
                console.log("sus");
              } else {
              }
            });

        }
        */
       
        return(
            <>
            <Row>
                <Col>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    your iban
                    other things
                </Col>
                <Col>
                    your transazioni
                </Col>
            </Row>
            </>
        )
    }
}
export default BankAccount;