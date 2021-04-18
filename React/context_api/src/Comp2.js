import React, { useContext } from 'react'
import { MyContext } from './Context'
export default function Comp2() {
    const { nameChnage } = useContext(MyContext);
    console.log("someContext", nameChnage)
    return (
        <div>
            <input placeholder="Name" onChange={nameChnage} />
        </div>
    )
}
