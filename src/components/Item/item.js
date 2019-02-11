import React, { Component } from 'react';
import style from './item.module.css';

class item extends Component {

    state = {
        finished: false
    }

    finishItemHandler = () => {
        if (this.state.finished) {
            this.setState({ finished: false })
        } else {
            this.setState({ finished: true })
        }

    }

    render() {

        let checkFinished = style.item;

        if (this.state.finished) {
            checkFinished = style.itemFinished;
        }

        return (
            <div className={style.containter}>
                <li onClick={this.finishItemHandler} className={checkFinished}>{this.props.text}
                    <i onClick={this.props.removeClicked} className={style.remove + " fas fa-ban"} ></i>
                </li>

            </div >
        )
    }
}

export default item;