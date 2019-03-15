import React, { Component } from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import Button from "./components/button/index";
import "./app.scss";

const tempArr = [
  {
    fName: "Pera",
    lName: "Peric",
    email: "pera@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
