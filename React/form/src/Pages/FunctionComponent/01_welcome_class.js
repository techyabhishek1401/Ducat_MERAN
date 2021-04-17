import React, { Component } from 'react'

export default class WelcomeClass extends Component {
    state = {
        name: ""
    }
    handleNameChange = (event) => {
        console.log("name:", event.target.value);
        this.setState({ name: event.target.value })
    }
    render() {
        const { name } = this.state;
        return (
            <div>
                <input placeholder="name" onChange={this.handleNameChange} /> <br />
                <p>Name:{name}</p>
            </div>
        )
    }
}
