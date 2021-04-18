import React from 'react'

export default function Suqare({ num, onClicked, index }) {
    const btnClicked = () => {
        onClicked(index)
    }
    return (
        <div>
            <button className="btn btn-block " onClick={btnClicked}>{num}</button>
        </div>
    )
}
