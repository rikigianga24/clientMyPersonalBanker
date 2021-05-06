import React from "react";
import { Container, Button } from "react-bootstrap";
import {
  Grid,
  Box,
  Link,
  TextField,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
class FormAuthenticator extends React.Component {


  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/authentication`, {
        cf: document.getElementById("cf").value,
        password: document.getElementById("password").value,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status == 200) {
          console.log("sus");
          window.location.href = "/account";
        } else {
        }
      });
  };

  render() {
    return (
      <>
        <div
          component="main"
          maxWidth="xs"
          className="d-flex p-2 bd-highlight justify-content-center mt-5"
        >
          <CssBaseline />
          <div className="card">
            <form noValidate method="POST" onSubmit={this.handleSubmit} className="p-5 ">
            <h1 className="text-center p-2 align-items-center">Accedi</h1>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="cf"
                label="Codice Fiscale"
                name="cf"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        
      </>
    );
  }
}

export default FormAuthenticator;
