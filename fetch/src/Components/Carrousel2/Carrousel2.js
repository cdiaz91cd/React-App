import React from 'react';
import { Link } from 'react-router-dom';


class Carrousel2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            loading: true
        }
    }

    async componentDidMount() {
        const siteId = this.props.match.params.site;

        const data = await fetch(`https://api.mercadolibre.com/sites/${siteId}/search?q=tv`);
        const dataJson = await data.json();

        this.setState({
            products: dataJson.results,
            loading: false
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading ? (
                    <span>Loading..</span>
                ) : (
                        <div>
                            {
                                this.state.products.map((product, key) => {
                                    return (
                                        <span key={key}>{product.title}</span>
                                    )
                                })
                            }
                        </div>
                    )
            </React.Fragment>
        );
    }
}

export default Carrousel2;
