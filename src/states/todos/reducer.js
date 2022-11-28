import { ActionType } from "../../utils/ActionType";

const todosReducer = (todos = [], action = {}) => {
  
  // if (action.type === 'ADD_TODO') {
    //   return [...todos, action.payload];
    // }
  
    // if (action.type === 'DELETE_TODO') {
    //   return todos.filter((todo) => todo.id !== action.payload.id);
    // }
  
    // if (action.type === 'TOGGLE_TODO') {
    //   return todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         complate: !todo.complate
    //       };
    //     }
    //     return todo;
    //   });
    // }
  
    // if (action.type === 'RECEIVE_TODOS') {
    //   return action.payload.todos;
    // }
  
    // return todos;

    switch (action.type) {
      case ActionType.ADD_TODO:
        return [...todos, action.payload];
      case ActionType.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
      case ActionType.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              complate: !todo.complate
            };
          }
          return todo;
        })
      case ActionType.RECEIVE_TODOS:
        return action.payload.todos;

      default:
        return todos;
    }
  };
  
  export { todosReducer };
  