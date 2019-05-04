import React, { Component } from "react";
import "./App.css";
import User from "./User";

class App extends Component {
  render() {
    return (
      <div
        className="App App-body"
        style={{
          backgroundImage: `url(https://cdn.dribbble.com/users/2565997/screenshots/5311937/depression_is_my_friend.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.54)",
            borderRadius: "5px",
            width: "60%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <header className="App-header">
            <img
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
              alt="logo"
              width="125px"
            />
          </header>
          <User />
        </div>
      </div>
    );
  }
}

export default App;
