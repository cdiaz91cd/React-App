import React from 'react';
import Product from '../Product';


class Carrousel extends React.Component {
    render() {
        return (
            <div className="carrouselContainer">
                {this.props.products.map((product, key) => {
                    return (
                        <Product key={key} 
                        thumbnail={product.thumbnail} 
                        price={product.price} 
                        currency={product.currency_id}
                        />
                    )
                })}
            </div >
        )
    }
}

export default Carrousel