import React,{useState} from 'react'

export default function Welcome() {
    const [name, setName] = useState("")
    return (
        <div>
            <input placeholder="name" onChange={(event)=>setName(event.target.value)}/> <br />
            Name:{name}
        </div>
    )
}
