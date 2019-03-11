import React from "react";
import "./styles.scss";
import Logo from "../../assets/img/download.png";
const header = () => {
  return (
    <header className="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img className="logoIMG" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default header;
