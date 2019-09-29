import React from "react";

class MainData extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <div>
          <p>{this.props.bio}</p>
        </div>
      </div>
    );
  }
}

export default MainData;