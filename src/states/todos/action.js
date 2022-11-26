import mockAPI from '../../data/mockAPI';

const addTodoActionCreator = ({ id, text }) => {
  return {
    type: 'ADD_TODO',
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
    type: 'DELETE_TODO',
    payload: {
      id
    }
  };
};

// toggle
const toggleTodoActionCreator = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id
    }
  };
};

const receiveTodosActionCreator = (todos) => {
  return {
    type: 'RECEIVE_TODOS',
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
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator(id));
  };
};

const asyncToggleTodo = (id) => {
  return async (dispatch) => {
    await mockAPI.toggleTodo(id);
    dispatch(toggleTodoActionCreator(id));
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
