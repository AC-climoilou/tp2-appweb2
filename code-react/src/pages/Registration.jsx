import React from "react";
import Axios from "axios";
import "../App.css";

Axios.defaults.withCredentials = true;

class Registration extends React.Component {
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

  register = () => {
    Axios.post("http://localhost:3001/register", {
      username: this.state.usernameReg,
      password: this.state.passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  login = () => {
    Axios.post("http://localhost:3001/login", {
      username: this.state.username,
      password: this.state.password,
    }).then((response) => {
      if (response.data.message) {
        this.setLoginStatus(response.data.message);
      } else {
        this.setLoginStatus(response.data[0].username);
      }
    });
  };

  // a tous les rafraichissement de page
  getLogin = () => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        this.setLoginStatus(response.data.user[0].username);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="registration">
          <h1>Registration</h1>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              this.setUsernameReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              this.setPasswordReg(e.target.value);
            }}
          />
          <button onClick={this.register}> Register </button>
        </div>

        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => {
              this.setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => {
              this.setPassword(e.target.value);
            }}
          />
          <button onClick={this.login}> Login </button>
          <button onClick={this.getLogin}> Get </button>
        </div>

        <h1>{this.state.loginStatus}</h1>
      </div>
    );
  }
}
export default Registration;