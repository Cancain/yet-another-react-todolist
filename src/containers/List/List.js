import React, { Component } from 'react';
import Input from '../../components/Input/input';
import Item from '../../components/Item/item';
import style from './List.module.css';

class List extends Component {

    state = {
        listItems: [],
        currentText: ''
    }

    //Updates the state with the most recent text written in the input
    textChangedHandler = (event) => {
        this.setState({ currentText: event.target.value })
    }

    //Copies the listItems from state 
    //adds 
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

                <ol className={style.List}>
                    {itemHandler}
                </ol>
            </div>
        );
    }
}

export default List;