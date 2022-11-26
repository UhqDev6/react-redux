import mockAPI from '../../data/mockAPI';
import { ActionType } from '../../utils/ActionType';

const addTodoActionCreator = ({ id, text }) => {
  return {
    type: ActionType.ADD_TODO,
    payload: {
      id,
      text,
      complate: false
    }
  };
};

//Menghapus todo
const deleteTodoActionCreator = (id) => {
  return {
    type: ActionType.DELETE_TODO,
    payload: {
      id
    }
  };
};

// toggle
const toggleTodoActionCreator = (id) => {
  return {
    type: ActionType.TOGGLE_TODO,
    payload: {
      id
    }
  };
};

const receiveTodosActionCreator = (todos) => {
  return {
    type: ActionType.RECEIVE_TODOS,
    payload: {
      todos
    }
  };
};

const asyncReceiveTodos = () => {
  return async (dispatch) => {
    const todos = await mockAPI.getTodo();
    dispatch(receiveTodosActionCreator(todos));
  };
};

const asyncAddTodo = (text) => {
  return async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
};

const asyncDeleteTodo = (id) => {
  return async (dispatch) => {
    dispatch(deleteTodoActionCreator(id));
    try {
      await mockAPI.deleteTodo(id);
    } catch (error) {
      alert(error.message);
      dispatch(deleteTodoActionCreator(id));
    }
  };
};

const asyncToggleTodo = (id) => {
  return async (dispatch) => {
    dispatch(toggleTodoActionCreator(id));
    try {
      await mockAPI.toggleTodo(id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleTodoActionCreator(id));
    }
  };
};

export {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
  receiveTodosActionCreator,
  asyncReceiveTodos,
  asyncAddTodo,
  asyncDeleteTodo,
  asyncToggleTodo
};
