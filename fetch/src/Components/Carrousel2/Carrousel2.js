import React from 'react';
import { Link } from 'react-router-dom';


class Carrousel2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        const siteId = this.props.match.params.site;
        const data = await fetch(`https://api.mercadolibre.com/sites/${siteId}/search?q=tv`);
        const dataJson = await data.json();
        console.log('siteId', siteId);
        console.log('dataJson', dataJson);

        this.setState({
            products: dataJson.results
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.products.map((product, key) => {
                    return (
                        <span key={key}>{product.title}</span>
                    )
                })}
            </React.Fragment>
        );
    }
}

export default Carrousel2;
