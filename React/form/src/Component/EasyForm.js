import React, { Component } from 'react'

export default class EasyForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"av",
            age:""
        }
    }
    render() {
        return (
            <div>
                <input placeholder="Name" onChange={(event)=>{
                //  this.state.name=event.target.value
                this.setState({name:event.target.value})
                }}/>
                 <input placeholder="Age" onChange={(event)=>{
                //  this.state.name=event.target.value
                this.setState({age:event.target.value})
                }}/>
                <h1>My Name is <span style={{color:"red"}}>{this.state.name}</span>,I'm {this.state.age} years old </h1>
            </div>
        )

        // inpRef.addEventListener('keyup',(e)=>{
        //     name=e.target.value
        // })
    }
}
