import React from 'react';
import './style.css'

class Card extends React.Component {
    render () {
        return(
            <div className="cardContainer">
                <p>{this.props.name}</p>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Card