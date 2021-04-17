import React, { Component } from 'react'
import ReusableTable from '../Component/ReusableTable';
import axios from 'axios';


export default class Api extends Component {
    state={
        tableHeader:["name","gender","email","picture"],
        totalUsers:[],
        loading:true,
        currentPage:1,
        number:0,
        recordsPerPage:50,
        usersToDisplay:[]
    }

    componentDidMount(){
      axios.get("https://randomuser.me/api/?results=500")
      .then((result)=>{
        console.log("result:",result.data.results);
        this.setState({totalUsers:result.data.results,loading:false})
      })
      .catch((err)=>{
          console.log("error:",err)
      })
    }

    handlePageChange=(event)=>{
       this.setState({currentPage:event.target.id
    })
    }
    render() {
        const {tableHeader,totalUsers,loading,recordsPerPage,currentPage,number}=this.state;
        //               1*50=>50
        let lastIndex=currentPage*recordsPerPage;
        //              50-50=>0
        let firstIndex=lastIndex-recordsPerPage;

        const usersToDisplay=totalUsers.slice(firstIndex,lastIndex);


        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalUsers.length / recordsPerPage); i++) {
         pageNumbers.push(i);
      }
      console.log("pageNumber:",pageNumbers) 



     if(loading){
         return <h1>Loading ........</h1>
     }
        return (
            <div>
                <h1>Api</h1>
                {number} <br />
                <button onClick={()=>this.setState({number:this.state.number+1})}> number</button>
                <ReusableTable header={tableHeader} data={usersToDisplay}/>
                <div>
                    <ul>
                        {pageNumbers.map((page)=>{
                            return <li id={page} onClick={this.handlePageChange}>{page}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
