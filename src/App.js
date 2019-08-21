import React from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAge: "",
      activeColor: false,
      inputOne:"",
      inputTwo:"",
      resultSum:""
    }
  }

  CheckAge(age) {
    let answer;
    console.log(age);
    if (parseInt(this.state.inputAge) >= 18) {
      answer = "mayor";
    } else {
      answer = "menor";
    }

    this.setState({
      answer: answer
    })
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: parseInt(value)
    })
  }



  handleDelete() {
    this.setState({
      answer: "",
      inputAge: ""
    })
  }

  handleChangeColor() {
    this.setState({
      activeColor: !this.state.activeColor
    })
  }

  handleClick () {
    const sum = this.state.inputOne + this.state.inputTwo;
    console.log(sum);
    this.setState({
      resultSum: sum
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" 
          name ="inputOne" 
          onChange={(e)=>{this.handleChange(e)}}/>

          <input type="text" 
          name ="inputTwo" 
          onChange={(e)=>{this.handleChange(e)}} />

          <Button onChange={this.CheckAge} text="click me" />
          <button onClick={()=>{this.handleClick()}}>Sum</button>
          <h3>{this.state.resultSum}</h3>
          {/* se pone le e => para que ejecute con el evento, sino es arrow function */}
          <h1 className={this.state.activeColor ? "blue" : "black"}>{this.state.answer}</h1>
          <Button text="delete" />
          <Button text="change color" />

        </header>
      </div>
    )
  }
}

export default App;
