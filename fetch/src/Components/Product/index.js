import React from 'react';


class Product extends React.Component {
    constructor (props) {
        super(props)
        this.currencyMap = {
            "ARS": "$",
            "DOLARES": "USD"
        }
    }
    render() {
        return (
            <div className="productContainer">
                <img src={this.props.thumbnail} />
                <p>{this.currencyMap[this.props.currency]} {this.props.price}</p>
            </div>
        )
    }
}

export default Product