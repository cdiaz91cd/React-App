import React from "react";
import ProjectsList from "../ProjectList/ProjectList";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <ProjectsList repos={this.props.repos} />
      </div>
    )
  }
}

export default Projects;