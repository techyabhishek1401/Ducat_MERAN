import React, { Component } from 'react'

export default class LifeCycle extends Component {
    //1 execute first
    constructor(props){
        super(props);
        console.log("constructor");
        this.state={
            number:0,
            loading:true,
            name:""
        }
    }
    // 2 executes on every state change
    static getDerivedStateFromProps(nextProps,nextState){
        console.log("mextProps:",nextProps);
        console.log("mextState:",nextState);
       console.log("getDerivedStateFromProps");
       return false
    }

    //cleanup function
    componentWillUnmount(){
        console.log("component will unmount")
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log("mextProps:",nextProps);
        console.log("mextState:",nextState);
       console.log("shouldComponentUpdate");
       if(this.state.number!==0 && nextState.number===this.state.number){
           return false
       }
    return true
    }
   componentDidMount(){
       console.log("did mount");
       setTimeout(()=>this.setState({name:"Abhishek",loading:false}),3000)
   }
    inrease=()=>{
        this.setState({number:this.state.number+1})
    }
    sameValue=()=>{
        this.setState({number:this.state.number})
    }

    // 3 executes on every state change
    render() {
        console.log("render");
        if(this.state.loading){
            return <h1>Loading......</h1>
        }
        return (
            <div>
                Life Cycle <br />
                {this.state.number} <br />
                 Name: {this.state.name}  <br />
                <button onClick={this.inrease}>Increase Number</button>
                <br />
                <button onClick={this.sameValue}>Same Value</button>
            </div>
        )
    }
}
