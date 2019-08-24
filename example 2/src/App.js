import React from "react";
import "./App.css";
import Item from "./Components/Item/Item";
import Title from "./Components/Title/Title";
import Card from "./Components/Card/Card";


class App extends React.Component {
  render() {
    const courses = [
      { title: "Desarrollo Front end avanzado", open: true, text: "Aumentá tu nivel en Frontend aprendiendo React, Redux y NextJS" },
      { title: "Desarrollo Front end", open: true, text: "Aprendé a crear sitios web desde cero con HTML, CSS, Javascript, React y Node." }
    ];

    const proposal = [
      {
        img: "https://courseit.com.ar/static/icons/camara-web.png",
        title: "Reviví cada clase",
        text: "Todas las clases son grabadas para que puedas volver a verlas tantas veces como te sea necesario."
      },
      {
        img: "https://courseit.com.ar/static/icons/apoyar.png",
        title: "Nunca perdés una clase",
        text: "Todas las clases se pueden tomar de forma presencial o remota."
      },
      {
        img: "https://courseit.com.ar/static/icons/charlar.png",
        title: "Estás Acompañado",
        text: "Un equipo de trabajo especializado te acompaña durante toda la cursada"
      }
    ];

    return (
      <div className="App">
        <Title title={"Nuestros cursos y carreras"} />
        <div className="cards-container">
          {courses.map((c, i) => {
            return (
              <Card title={c.title} text={c.text} open={c.open} />
            );
          })}
        </div>
        <Title title={"Nuestra propuesta de valor"} />
        <div className="proposal-container">
          <div className="card-container">
            {proposal.map((p, i) => {
              return (
                <Item
                  key={i}
                  title={p.title}
                  text={p.text}
                  img={p.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
