import React, { Component } from "react";


export default class Login extends Component {
  state = { username: "", password: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ Password: "" });

    let LogIn = {
      username: this.state.username,
      password: this.state.password,
    };
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(LogIn),
    };
    

    fetch("https://studiofy-django.herokuapp.com/token-auth/", options)
      .then((r) => r.json())
      .then((data) => {
        if (
          data.non_field_errors === "Unable to log in with provided credentials."
        ) {
          alert(data.non_field_errors[0]);
        } else {
          localStorage.setItem("token", data.token);
          window.location = "/home";
        }
      })

      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Studiofy - The Music Cover app!</h1>
        <div className="loginPageContainer">
          <h3>Login</h3>
          <div className="loginFormContainer">
            <form autoComplete="disabled" onSubmit={this.handleFormSubmit}>
              <input
                required
                autoComplete="disabled"
                className="formInput"
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleInput}
              />
              <br />
              <input
                required
                className="formInput"
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleInput}
              />
              <br />
              <span className="submitForm">
                <input type="submit" value="Login" className="loginButton" />
                <div className="callToAction">
                  <button className="loginButton">
                    <a className="regButton"href="/register">Register</a>
                  </button>
                </div>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}