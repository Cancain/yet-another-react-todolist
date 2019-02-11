import React from 'react';

const item = (props) => {
    return (
        <div>
            <li>{props.text}</li>
            <a>remove</a>
        </div>
    )
}

export default item;