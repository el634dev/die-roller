// Counter Component
import React from 'react';
import { useState } from 'react';
// Counter Styling
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='Counter'>
            {/* Increment */}
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>Counter: {count}</h1>
            {/* Decrement */}
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default Counter;
