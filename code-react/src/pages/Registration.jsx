import React, { Component } from 'react';
import Axios from "axios";
import "../App.css";

Axios.defaults.withCredentials = true;

class Registration extends Component {
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

  setUsernameReg = (data) => {
    this.setState({
      usernameReg: data
    })
  }

  setPasswordReg = (data) => {
    this.setState({
      passwordReg: data
    })
  }

  setLoginStatus = (data) => {
    this.setState({
      loginStatus: data
    })
  }

  register = () => {
    Axios.post("http://localhost:3001/addUser", {
      username: this.state.usernameReg,
      password: this.state.passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="App">
        <div className="registration">
          <h1>Registration</h1>

          <div>
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                this.setUsernameReg(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Password..."
              onChange={(e) => {
                this.setPasswordReg(e.target.value);
              }}
            />
          </div>

          <button onClick={this.register}> Register </button>
        </div>
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
export default Registration;