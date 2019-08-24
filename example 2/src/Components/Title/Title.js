import React from "react";
import "./Title.css";

class Title extends React.Component {
  render() {
    return (
      <div className="title-container">
        <div className="title">{this.props.title}</div>
        <div className="dotted" />
      </div>
    );
  }
}

export default Title;