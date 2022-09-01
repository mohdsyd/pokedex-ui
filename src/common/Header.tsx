import * as React from "react";
import logo from "../logo.png";
import "./Header.css";

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
  <div className="header">
    <img src={logo} className="app-logo" alt="logo" />
  </div>
);

Header.defaultProps = {
  name: "world",
};

export default Header;
