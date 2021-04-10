import React, { Component } from 'react'
import MyForm from './Component/Form';
import EasyForm from './Component/EasyForm';
import PropsComponent from './Pages/01Props';
import Api from './Pages/02Api';
import LifeCycleMethods from './Pages/02LifeCycle';
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <EasyForm/> */}
        {/* <MyForm /> */}
        {/* <Api /> */}
        {/* <PropsComponent /> */}
        <LifeCycleMethods />
      </div>
    )
  }
}
