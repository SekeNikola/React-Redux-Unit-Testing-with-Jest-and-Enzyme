import React, { Component } from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import "./app.scss";

const tempArr = [
  {
    fName: "Pera",
    lName: "Peric",
    email: "pera@gmail.com",
    age: false,
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
        </div>
      </div>
    );
  }
}

export default App;
