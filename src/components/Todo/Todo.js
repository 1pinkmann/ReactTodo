import React, { Component } from 'react';

import TodoItem from './TodoItem';

export default class Todo extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="title">React-Todo</h1>
                <ul className="todo">
                    {this.props.todos.map(todo => {
                        return <TodoItem key={todo.id} completed={todo.completed} id={todo.id} title={todo.title} />
                    })}
                </ul>
            </React.Fragment>
        );
    }
}