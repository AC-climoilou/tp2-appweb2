import React, { Component } from 'react';
import Axios from "axios";
import "../App.css";

Axios.defaults.withCredentials = true;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameReg: "",
      passwordReg: "",
      username: "",
      password: "",
      loginStatus: ""
    };
  }

  setUsername = (data) => {
    this.setState({
      username: data
    })
  }

  setPassword = (data) => {
    this.setState({
      password: data
    })
  }

  setLoginStatus = (data) => {
    this.setState({
      loginStatus: data
    })
  }

  login = () => {

    let objetJSon = {
                        username: this.state.username,
                        password: this.state.password,
                    };

    Axios.post("https://localhost:3001/login", objetJSon).then((response) => {
      if (response.data.message) {
        this.setLoginStatus(response.data.message);
      } else {
        this.setLoginStatus(response.data.user.username);
      }
    });
  };

  // a tous les rafraichissement de page
  getLogin = () => {
    Axios.get("https://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        this.setLoginStatus(response.data.user.username);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="login">
          <h1>Login</h1>

          <div>
            <input
            type="text"
            placeholder="Username..."
            onChange={(e) => {
              this.setUsername(e.target.value);
            }}
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => {
                this.setPassword(e.target.value);
              }}
            />
          </div>
          
          <button onClick={this.login}> Login </button>
          <button onClick={this.getLogin}> Get </button>
        </div>

        <h1>{this.state.loginStatus}</h1>
      </div>
    );
  }
}
export default Login;