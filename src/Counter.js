import React, {useState} from "react";


function counter () {

    const [count, setCount] = useState(0)

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);
    

    return (
        <div>
            <h1>COUNTER APP</h1>
            <h2>{count}</h2>

        <div className="button-container">
            <button onClick={}>+1</button>
            <button onClick={}>-1</button>
            <button onClick={}>Reset</button>


        </div>
        </div>
    )
}