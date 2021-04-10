import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("constructor");
        this.state={
            number:0
        }
    }
    static getDerivedStateFromProps(nextProps,nextState){
        console.log("mextProps:",nextProps);
        console.log("mextState:",nextState);
       console.log("getDerivedStateFromProps");
       return false
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("mextProps:",nextProps);
        console.log("mextState:",nextState);
       console.log("shouldComponentUpdate");
       if(nextState.number===this.state.number){
           return false
       }
    return true
    }
    componentDidMount(){
        console.log("componentDidMunt")
    }
    inrease=()=>{
        this.setState({number:this.state.number+1})
    }
    sameValue=()=>{
        this.setState({number:this.state.number})
    }
    render() {
        console.log("render");
        return (
            <div>
                Life Cycle <br />
                {this.state.number} <br />
                <button onClick={this.inrease}>Increase Number</button>
                <br />
                <button onClick={this.sameValue}>Same Value</button>
            </div>
        )
    }
}
