import React, { Component } from 'react';

export default class TodoItem extends Component {

    state = {
        completed: this.props.completed
    }

    render() {
        return (
            <li className={this.state.completed ? "todo__item completed" : "todo__item"}>
                <input id={this.props.id} type="checkbox" className="todo__checkbox" checked={this.state.completed} onChange={this.handleCheckboxClick}/>
                <label htmlFor={this.props.id} className="todo__text">{this.props.title}</label>
            </li>
        );
    }

    handleCheckboxClick = () => {
        this.setState(state => ({
            completed: !state.completed
        }))
    }
}