import React, { useContext } from 'react'
import { MyContext } from './Context'
export default function Comp1() {
    const { name } = useContext(MyContext);

    return (
        <div>
            My Name is {name}
        </div>
    )
}
