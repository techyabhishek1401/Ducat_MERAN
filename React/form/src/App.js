import React, { Component } from 'react'
import MyForm from './Component/Form';
import EasyForm from './Component/EasyForm';
import PropsComponent from './Pages/01Props';
import Api from './Pages/03Api';
import LifeCycleMethods from './Pages/02LifeCycle';
import FunctionalComponent from './Pages/FunctionComponent';
import WelcomeClass from './Pages/FunctionComponent/01_welcome_class';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  state = {
    show: true
  }
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/api">API</Link>
            </li>
            <li>
              <Link to="/easyform">EasyForm</Link>
              {/* <a href="/users">Users </a> */}
            </li>
          </ul>
        </nav>
        <div>
          {/* <EasyForm/> */}
          {/* <MyForm /> */}
          {/* <Api /> */}
          {/* <PropsComponent /> */}
          {/* {this.state.show ? <h1>I'm visible</h1>:  <LifeCycleMethods />}
       <button onClick={()=>this.setState({show:!this.state.show})}>Toggle view</button> */}
          {/* <WelcomeClass /> */}

          <Switch>
            <Route path="/" exact>
              <h1>Welcome to Home</h1>
            </Route>
            <Route path="/easyform" >
              <EasyForm />
            </Route>
            <Route path="/api">
              <Api />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
