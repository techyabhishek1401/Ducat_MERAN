import React, { Component } from 'react'
import MyForm from './Component/Form';
import EasyForm from './Component/EasyForm'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <EasyForm/> */}
        <MyForm />
      </div>
    )
  }
}
