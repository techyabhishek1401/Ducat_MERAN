import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            department:"",
            users:[]
        }
    }
    handleChange=function(event) {
        console.log("event:",event.target.name,event.target.value)
         this.setState({[event.target.name]:event.target.value});
          setTimeout(()=>console.log(this.state),10)
    }
    handleSubmit=()=>{
        debugger;
        let tmp_users=[...this.state.users]; //[]
        let tmp={
            name:this.state.name,
            age:this.state.age,
            department:this.state.department
        } ;
        tmp_users.push(tmp) //[{tmp}]
        this.setState({users:tmp_users})
        setTimeout(()=>console.log(this.state),10)
        }
    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="name" onChange={this.handleChange.bind(this)}/> <br />
                <input type="number" name="age" placeholder="age" onChange={this.handleChange.bind(this)} /> <br />
                <input type="text" name="department" placeholder="department" onChange={this.handleChange.bind(this)}/> <br />
                <button onClick={this.handleSubmit}>Click Me</button>

            </div>
        )
    }
}
