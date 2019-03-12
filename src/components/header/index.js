import React from "react";
import "./styles.scss";
import Logo from "../../assets/img/download.png";
const header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default header;
