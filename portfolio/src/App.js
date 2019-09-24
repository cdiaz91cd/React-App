import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import MainData from "./Components/MainData/MainData";
import Projects from "./Components/Projects/Projects";
import "./App.css";
import { ProjectProvider } from "./Context/ProjectContext";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      repos: []
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/chiaradiaz1991");
    const dataJson = await data.json();

    const repos = await fetch("https://api.github.com/users/chiaradiaz1991/repos");
    const reposJson = await repos.json();

    this.setState({
      data: dataJson,
      repos: reposJson
    });
  }

  render() {
    const { name, bio, avatar_url } = this.state.data;
    const { repos } = this.state;
    return (
      <div className="App">
        <NavBar name={name ? name : ""} />
        <MainData bio={bio ? bio : ""} img={avatar_url ? avatar_url : ""} />
        <ProjectProvider value={repos}>
          <Projects />
        </ProjectProvider>
      </div>
    );
  }
}

export default App;