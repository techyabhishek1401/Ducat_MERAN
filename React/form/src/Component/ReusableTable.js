import React from 'react'

export default function ReusableTable({header,data}) {
    console.log("header:",header)
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sno.</th>
                    {header.map(heading=>{
                        return <th className="table-heading">{heading}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((record,index)=>{
                    return <tr>
                        <td>{index+1}</td>
                        <td>{record.name.title} {record.name.first} {record.name.last}</td>
                <td>{record.gender}</td>
                <td>{record.email}</td>
                <td><img src={record.picture.thumbnail}/></td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
