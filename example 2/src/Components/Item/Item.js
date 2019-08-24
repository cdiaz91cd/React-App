import React from "react";
import "./Item.css";

class Item extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <img src={this.props.img} />
          <div>{this.props.title}</div>
          <div>{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Item