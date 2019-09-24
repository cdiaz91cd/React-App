import React from "react";
import ProjectContext from "../../Context/ProjectContext";
import ProjectsList from "../ProjectList/ProjectList";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <ProjectsList />
      </div>
    )
  }
}

export default Projects;