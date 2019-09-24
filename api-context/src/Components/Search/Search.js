import React from 'react';
import './style.css'

class Search extends React.Component {

    handleChange(e) {
        const value= e.target.value;
        this.props.handleCallback(value)
    }

    render () {
        return (
            <div className="navbarContainer">
                <h1>Startup ARG</h1>
                <input type="text" onChange={(e)=> this.handleChange(e)}/>
            </div>
        )
    }
}

export default Search