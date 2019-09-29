import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import MainData from "./Components/MainData/MainData";
import Projects from "./Components/Projects/Projects";
import "./App.css";


function App() {

  const [data, setData] = useState('');
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://api.github.com/users/chiaradiaz1991');
      const dataJson = await data.json();
      setData(dataJson)
    }
    if (!data.name && !data.bio) {
      fetchData();
    }

    async function fetchRepos() {
      const repos = await fetch("https://api.github.com/users/chiaradiaz1991/repos");
      const reposJson = await repos.json();
      setRepos(reposJson)
    }
    fetchRepos();
  })

  return (
    <div className="App">
      <NavBar name={data.name ? data.name : ""} />
      <MainData bio={data.bio ? data.bio : ""} img={data.avatar_url ? data.avatar_url : ""} />
      <Projects repos={repos} />
    </div>
  );
}

export default App;