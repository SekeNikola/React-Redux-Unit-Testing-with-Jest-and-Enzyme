import React, { Component } from "react";
import Header from "./components/header/index";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
