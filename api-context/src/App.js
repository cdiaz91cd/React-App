import React from 'react';
import Card from './Components/Cards/Card';
import Search from './Components/Search/Search';


class App extends React.Component {
  constructor(props) {
    super(props);
    const data = [{
      name: 'Chiarystal',
      desc: 'a',
    }, {
      name: 'Publica.la',
      desc: 'a',
    }, {
      name: 'Chiarystal 2',
      desc: 'a'
    }, {
      name: 'Chiarystal 3',
      desc: 'a'
    }]
    this.state = {
      companies: data,
      filterCompanies: data
    }
  }

  handleCallback(value) {
    const filteredCompanies = this.state.companies.filter((company) => {
      if (company.name.indexOf(value) > -1) {
        return company
      }
    })

    console.log(filteredCompanies)


    this.setState({
      companies: filteredCompanies,
      filteredCompanies: this.state.companies
    })
  }

  render() {
    return (
      <div className="App">
        <Search handleCallback={(value) => this.handleCallback(value)} />
        <div>
          {this.state.companies.map((companie, index) => {
            return (
              <Card
                key={index}
                name={companie.name}
                desc={companie.desc} />
          )})
          }
        </div>)

      </div>
    );
  }
}

export default App;
