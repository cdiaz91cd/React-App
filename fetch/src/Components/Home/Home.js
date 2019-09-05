import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Link to="/carrousel/MLA">Argentina</Link>
                <Link to="/carrousel/MLB">Brasil</Link>
            </React.Fragment>
        );
    }
}

export default Home;
