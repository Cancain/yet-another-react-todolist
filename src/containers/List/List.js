import React, { Component } from 'react';
import Input from '../../components/Input/input';
import Item from '../../components/Item/item';

class List extends Component {

    state = {
        listItems: [],
        currentText: ''
    }

    textChangedHandler = (event) => {
        this.setState({ currentText: event.target.value })
    }

    addItemHandler = () => {
        const items = [...this.state.listItems];
        items.push(this.state.currentText)
        this.setState({
            listItems: items,
            currentText: ''
        });
    }

    keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            this.addItemHandler();
        }
    }

    removeHandler = (index) => {
        const items = this.state.listItems;
        items.splice(index, 1);
        this.setState({ listItems: items });
    }

    render() {

        const itemHandler = this.state.listItems.map((item, index) =>
            <Item removeClicked={() => this.removeHandler(index)} text={item} key={index} />
        )

        return (
            <div>
                <Input clicked={this.addItemHandler}
                    textChange={(event) => this.textChangedHandler(event)}
                    text={this.state.currentText}
                    inputKeyDown={(event) => this.keyDownHandler(event)}
                />

                <ol>
                    {itemHandler}
                </ol>
            </div>
        );
    }
}

export default List;