import React from 'react';
import Carrousel from '../src/Components/Carrousel/index';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Carrito from './Components/Carrito';
import Test from './Components/Test';
import Dinamic from './Components/Dinamic/Dinamic';
import Home from './Components/Home/Home';
import Carrousel2 from '../src/Components/Carrousel2/Carrousel2';
import Suma from '../src/Components/Suma/Suma';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }


  async componentDidMount() {
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=tv&limit=5');
    const jsonData = await data.json(); //primero pedir informacion, devuelve la información en strim, en la nueva variable, result, convertir la data a un json. como lo hace de forma async hay que poner un await antes.

    this.setState({
      products: jsonData.results
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/carrito" component={Carrito} />
          <Route path="/test" component={Test} />
          <Route path="/dinamic/:test" component={Dinamic} />
          <Route path="/" exact component={Home} />
          <Route path="/carrousel/:site" component={Carrousel2} />
          <Route path="/suma" component={Suma} />
        </Router>
        {/* <Carrousel products={this.state.products} /> */}
      </div>
    );
  }
}

export default App;
