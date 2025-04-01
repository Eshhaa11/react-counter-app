import React, {useState} from "react";


function counter () {

    const [count, setCount] = useState("0")

    return (
        <div>
            <h1>COUNTER APP</h1>
            <h2>{count}</h2>

        <div className="button-container">
            <button onClick={}>+1</button>
            <button onClick={}>-1</button>


        </div>
        </div>
    )
}