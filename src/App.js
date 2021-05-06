import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FormAuthenticator from "../src/components/FormAuthenticator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BankAccount from "./components/BankAccount";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div style={{ backgroundColor: "#1c542d"}}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/account">
            <BankAccount />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <FormAuthenticator />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
