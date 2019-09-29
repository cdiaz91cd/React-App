import React from "react";

class Project extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.name} - {this.props.data.stargazers_count}
      </div>
    );
  }
}

export default Project;