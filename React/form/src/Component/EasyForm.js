import React, { Component } from 'react'

export default class EasyForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"av",
            age:"",
            department:""
        }
    }
    handleChange=(event)=>{
        console.log("event.target.name:",event.target.name);
        console.log("event.target.value:",event.target.value);
        this.setState({[event.target.name]:event.target.value});
        
    }
    render() {
        return (
            <div>
                <input placeholder="Name" name="name" onChange={this.handleChange}/>
                 <input placeholder="Age" name="age" onChange={this.handleChange}/>
                 <input placeholder="Department" name="department" onChange={this.handleChange}/>
                <h1>My Name is <span style={{color:"red"}}>{this.state.name}</span>,I'm {this.state.age} years old </h1>
            </div>
        )

        // inpRef.addEventListener('keyup',(e)=>{
        //     name=e.target.value
        // })
    }
}
