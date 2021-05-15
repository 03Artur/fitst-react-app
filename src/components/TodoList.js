import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
  const { todos, onEditTodo } = props;

  const mappedTodos = todos.map((todo, index) => (
    <TodoItem
      key={todo.id}
      isDone={todo.isDone}
      text={todo.text}
      onEdit={
        (text) => onEditTodo(index, text)
      }
    />
  ));

  return (
    <ul>
      {mappedTodos}
    </ul>
  );
};
