import React, { Component } from 'react'
import MyForm from './Component/Form';
import EasyForm from './Component/EasyForm';
import PropsComponent from './Pages/01Props';
import Api from './Pages/03Api';
import LifeCycleMethods from './Pages/02LifeCycle';
import FunctionalComponent from './Pages/FunctionComponent'
export default class App extends Component {
  state={
    show:true
  }
  render() {
    return (
      <div>
        {/* <EasyForm/> */}
        {/* <MyForm /> */}
        {/* <Api /> */}
        {/* <PropsComponent /> */}
        {/* {this.state.show ? <h1>I'm visible</h1>:  <LifeCycleMethods />}
       <button onClick={()=>this.setState({show:!this.state.show})}>Toggle view</button> */}
       <FunctionalComponent />
      </div>
    )
  }
}
