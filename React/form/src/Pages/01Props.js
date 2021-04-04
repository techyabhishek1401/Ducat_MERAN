import React, { Component } from 'react'




 function Child2(props) {
    return (
        <div style={{border:'1px solid black',padding:"20px"}}>
              Im {props.age} years old
            </div>
    )
}

function Child1({name}) {
   
    return (
        <div style={{border:'1px solid black',padding:"20px"}}>
              Hi My name is  {name}
            </div>
    )
}


export default class Parent extends Component {
    render() {
        return (
            <div style={{border:'1px solid red',padding:"20px"}}>
                Parent
                <Child1 name="abhishek"  />
                <Child2 age="27" />
                <Child1 name="Saurab"  />
                <Child2 age="24" />
               
            </div>
        )
    }
}
