import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Profile from "./components/profile.component";
import BankAccount from "./components/bankaccount.component";
import homecomponent from "./components/home.component";
import Transaction  from "./components/transaction.component";
import successScreen from "./functional/success_screen";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        /*
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        */
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    //showModeratorBoard, showAdminBoard
    const { currentUser } = this.state;

    return (
      <div className="h-100">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            My Personal Banker
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                <img src="../icons/homepage.png" alt="" style={{width : "30px"}} />Home
              </Link>
            </li>

            {currentUser && (
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  <img src="../icons/id-card.png" alt="" style={{width : "30px"}} /> Profile
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
             
            <li className="nav-item">
            <Link to={"/prepaidcard"} className="nav-link">
              <img src="../icons/prepaid-card.png" alt="" style={{width: "30px" }}></img>Carta Prepagata
            </Link>
            </li>

            <li className="nav-item">
            <Link to={"/creditcard"} className="nav-link">
              <img src="../icons/credit-card.png" alt="" style={{width: "30px" }}></img>Carta di credito
            </Link>
            </li>

            <li className="nav-item">
            <Link to={"/transactions"} className="nav-link">
              <img src="../icons/cash-payment.png" alt="" style={{width: "30px" }}></img>Transazioni
            </Link>
            </li>

            <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                <img src="../icons/logout.png" alt="" style={{width: "30px" }}></img>LogOut
                </a>
              </li>
          </div>
          
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                <img src="../icons/lock.png" alt="" style={{width: "30px" }}></img>Login
                </Link>
              </li>
            </div>
          )}
        </nav>

          <Switch>
            <Route exact path={["/", "/home"]} component={homecomponent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/transactions" component={Transaction} />
            <Route exact path="/bankaccount" component={BankAccount} />
            <Route exact path="/success" component={successScreen} />
          </Switch>
        </div>
    );
  }
}

export default App;
