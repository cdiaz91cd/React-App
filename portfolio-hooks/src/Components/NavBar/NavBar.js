import React from "react";
import "./style.css";

class Navbar extends React.Component {
  render() {
    return <nav>{this.props.name}</nav>;
  }
}

export default Navbar;