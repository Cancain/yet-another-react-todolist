import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default List;