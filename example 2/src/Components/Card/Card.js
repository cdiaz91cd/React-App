import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div>
          {this.props.open ? (
            <span>Inscripciones abiertas</span>
          ) : (
            <span>Suspendido</span>
          )}
          <div>{this.props.title}</div>
          <div>{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Card;