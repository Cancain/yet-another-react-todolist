import React from 'react';

const input = (props) => {
    return (
        <div>
            <input type='text' value={props.text} />
            <button onClick={props.clicked}>Add</button>
        </div>
    );
}

export default input;