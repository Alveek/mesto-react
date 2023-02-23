import React from "react";
import logo from "../../public/images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место" />
    </header>
  );
}

export default Header;
