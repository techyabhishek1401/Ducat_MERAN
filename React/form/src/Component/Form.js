import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            department:"",
            id:0,
            users:[],
            toUpdate:false,
            tmp:{}
        }
    }
    handleChange=function(event) {
        console.log("event:",event.target.name,event.target.value)
      //  this.state.name=event.target.value
        this.setState({[event.target.name]:event.target.value})
      
       setTimeout(()=>console.log(this.state),10)
    }
    handleSubmit=()=>{
 
        let tmp_users=[...this.state.users]; //[]
        let tmp={
            name:this.state.name,
            age:this.state.age,
            department:this.state.department,
            id:this.state.id+1
        } ;
        tmp_users.push(tmp) //[{tmp}]
        console.log("new Array:",tmp_users)
        this.setState({users:tmp_users,name:'',age:'',department:"",id:this.state.id+1})
        setTimeout(()=>console.log(this.state),10)
        }

        handleEdit=(record)=>{
            console.log("record:",record);
            this.setState({name:record.name,age:record.age,department:record.department,toUpdate:!this.state.toUpdate,tmp:record})
        }

        handleUpdate=()=>{
            const {age,name,department,users,tmp}=this.state
            let tmp_users=[...users]
            console.log("inside Update");
            const user=users.find((r)=> r.id===tmp.id);
            console.log("user:",user);
            const index=users.indexOf(user);
            tmp_users[index]={...user,name,age,department}
           this.setState({users:tmp_users,toUpdate:false,name:"",age:"",department:""})

        }
    render() {
        const {age,name,department,toUpdate,users}=this.state
        //age-- this.state.age
        //name-- this.state.name
        return (
            <div>
                <input type="text" name="name" value={name} placeholder="name" onChange={this.handleChange.bind(this)}/> <br />
                <input type="number" name="age" value={age} placeholder="age" onChange={this.handleChange.bind(this)} /> <br />
                <input type="text" name="department" value={department} placeholder="department" onChange={this.handleChange.bind(this)}/> <br />
               {
                  toUpdate ? <button onClick={this.handleUpdate}>Update User</button> 
                 : <button onClick={this.handleSubmit}>Add User</button>
                }
               
                {/* Table */}
              {users.length>0 &&  <table border='2'>
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>{
                            console.log("user:",user,index)
                         return <tr key={`user-${index}`}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.department}</td>
                                    <td><button onClick={this.handleEdit.bind(this,user)}>Edit</button></td>
                                    <td><button>Delete</button></td>
                         </tr>
                        })}
                    </tbody>
                </table>}
            </div>
        )
    }
}
