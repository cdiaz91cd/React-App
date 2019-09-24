import React from "react";
import ProjectContext from "../../Context/ProjectContext";
import Project from "../Project/Project";

class ProjectList extends React.Component {
  static contextType = ProjectContext;
  render() {
    console.log(this.context);
    return (
      <div>
        {this.context.map((project, key) => {
          return <Project data={project} key={key} />;
        })}
      </div>
    );
  }
}

export default ProjectList;