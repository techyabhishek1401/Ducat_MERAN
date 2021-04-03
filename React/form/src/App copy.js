import React, { Component } from 'react'


export  class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    )
  }
}

export class Test extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}



export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Welcome />
        <Test />
      </div>
    )
  }
}

