import React, { useState } from 'react'

export default function Welcome() {
    // state={
    //     name:""
    // }
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const handelChange = (event) => {
        setName(event.target.value)
    }

    //   const [state,setState]=useState({})
    return (

        <div>
            <input placeholder="name" onChange={handelChange} /> <br />
            <p>Name:{name}</p>
            <input placeholder="age" onChange={(e) => setAge(e.target.value)} /> <br />
            <p>Name:{age}</p>
        </div>

    )
}
