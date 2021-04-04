import React, { Component } from 'react'
import MyForm from './Component/Form';
import EasyForm from './Component/EasyForm';
import PropsComponent from './Pages/01Props'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <EasyForm/> */}
        {/* <MyForm /> */}
        <PropsComponent />
      </div>
    )
  }
}
