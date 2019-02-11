import React from 'react';

const item = (props) => {
    return (
        <div>
            <li>{props.text}</li>
            <p onClick={props.removeClicked}>remove</p>
        </div>
    )
}

export default item;