import React from 'react'

export default function Table(props) {

    console.log("props:",props)
    const handleEdit=(student)=>{
     props.onEdit(student)
    }

    const handleDelete=(student)=>{
      props.onDelete(student)
   }
    return (
        <table border='2'>
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
                        {props.users.map((user,index)=>{
                            console.log("user:",user,index)
                         return <tr key={`user-${index}`}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.department}</td>
                                    <td><button onClick={handleEdit.bind(this,user)}>Edit</button></td>
                                    <td><button  onClick={handleDelete.bind(this,user)}>Delete</button></td>
                         </tr>
                        })}
                    </tbody>
                </table>
    )
}
