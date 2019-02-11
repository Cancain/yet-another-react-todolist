import React from 'react';

const input = (props) => {
    return (
        <div>
            <input type='text'
                value={props.text}
                onChange={props.textChange}
                onKeyDown={props.inputKeyDown}
            />
            <button onClick={props.clicked}>Add</button>
        </div>
    );
}

export default input;