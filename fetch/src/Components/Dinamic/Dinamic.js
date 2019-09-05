import React from 'react';


class Dinamic extends React.Component {

    render() {
        return (
            <div className="App">
                Hello - {this.props.match.params.test}
        </div>
        );
    }
}

export default Dinamic;
