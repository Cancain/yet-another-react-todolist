import React, { Component } from 'react';
import Input from '../../components/Input/input';
import Item from '../../components/Item/item';

class List extends Component {

    state = {
        listItems: [
            { text: 'Item1' },
            { text: 'Item2' },
            { text: 'Item3' }
        ]
    }

    itemHandler = this.state.listItems.map((item, index) =>
        <Item text={item.text} key={index} />
    );

    render() {
        return (
            <div>
                <Input />
                <ol>
                    {this.itemHandler}
                </ol>
            </div>
        );
    }
}

export default List;