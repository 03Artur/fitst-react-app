import React from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Test',
          isDone: false,
        },
        {
          id: 2,
          text: 'Test',
          isDone: false,
        },
        {
          id: 3,
          text: 'Test',
          isDone: false,
        },
        {
          id: 4,
          text: 'Test asdasd',
          isDone: false,
        },
      ],
    };
  }

  editTodo = (index, text) => {
    const { todos } = this.state;
    const newTodos = [...todos];
    newTodos[index] = {
      ...todos[index],
      text,
    };
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        <TodoForm />
        <TodoList todos={todos} onEditTodo={this.editTodo} />
      </>
    );
  }
}

