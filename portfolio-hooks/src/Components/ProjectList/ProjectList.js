import React from "react";
import Project from "../Project/Project";

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        {this.props.repos.map((project, key) => {
          return <Project data={project} key={key} />;
        })}
      </div>
    );
  }
}

export default ProjectList;