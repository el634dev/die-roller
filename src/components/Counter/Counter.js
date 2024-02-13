import React from 'react';
import { useState } from 'react';
// Styling
import './Counter.css';

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div className='Counter'>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default Counter;
