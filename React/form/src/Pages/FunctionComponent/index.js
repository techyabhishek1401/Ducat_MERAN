import React from 'react'
import Welcome from './01_welcome';
import Api from './02_Api_function'
export default function index() {
    return (
        <div>
            <h1 className="text-center">Function Component</h1>
            {/* <Welcome /> */}
            <Api />
        </div>
    )
}
