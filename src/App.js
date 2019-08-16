import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAge: "",
      activeColor: false,
    }
  }

  CheckAge(age) {
    let answer;
    console.log(age);
    if(parseInt(this.state.inputAge) >= 18) {
      answer="mayor";
    } else {
      answer="menor";
    }

    this.setState({
      answer: answer
    })
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      inputAge: e.target.value
    }, ()=>{
      console.log(1, this.state.inputAge)
    })

    console.log(2, this.state.inputAge)
  }

  handleDelete() {
    this.setState({
      answer:"",
      inputAge:""
    })
  }

  handleChangeColor() {
    this.setState({
      activeColor: !this.state.activeColor
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={ e =>this.handleChange(e)} value={this.state.inputAge} />
          {/* se pone le e => para que ejecute con el evento, sino es arrow function */}
          <button onClick={()=>this.CheckAge(10)}>Clickkkk me!</button>
          <h1 className={this.state.activeColor ? "blue": "black"}>{this.state.answer}</h1>
          <button onClick={()=>{this.handleDelete()}}>Borrar</button>
          <button onClick={()=> {this.handleChangeColor()}}>Cambia de color</button>
        </header>
      </div>
    )
  }
}

export default App;
