import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrament() {
        setCount(count - 1);
    }
    return (
        <div className='Counter'>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrament}>Decrament</button>
        </div>
    );
};

export default Counter;