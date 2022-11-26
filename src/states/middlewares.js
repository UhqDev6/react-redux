const todoDeletionCheck = (store) => {
    return (next) => (action) => {
      if (action.type === 'DELETE_TODO') {
        const { todos } = store.getState();
        const todosToBeDeleted = todos.find((todo) => todo.id === action.payload.id);
  
        if (!todosToBeDeleted.complate) {
          alert('Tidak bisa menghapus todo yang belum selesai');
          return;
        }
      }
      return next(action);
    };
  };
  
  const thunk = (store) => {
    return (next) => (action) => {
      if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
      }
      return next(action);
    };
  };
  
  export { todoDeletionCheck, thunk };
  