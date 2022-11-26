import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoActionCreator,
  asyncAddTodo,
  asyncDeleteTodo,
  asyncReceiveTodos,
  asyncToggleTodo,
  deleteTodoActionCreator,
  toggleTodoActionCreator
} from '../states/todos/action';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTodos());
  }, [dispatch]);

  const onAddTodo = (text) => {
    dispatch(asyncAddTodo(text));
  };

  const onToggleTodo = (id) => {
    dispatch(asyncToggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(asyncDeleteTodo(id));
  };

  return (
    <>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} toggleTodo={onToggleTodo} deleteTodo={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
