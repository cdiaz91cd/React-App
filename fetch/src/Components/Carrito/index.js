import React from 'react';
import { Link } from 'react-router-dom';


class Carrito extends React.Component {
    render() {
        return (
            <div className="carritoContainer">
                Hola soy un Carrito
                <Link to="/test">Ir a prueba</Link>
            </div >
        )
    }
}

export default Carrito