const mockAPI = (() => {
    const saveTodosToStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };
  
    const saveGoalsToStorage = () => {
      localStorage.setItem('goalss', JSON.stringify(goals));
    };
  
    const getTodosFormStorage = () => {
      let todos = localStorage.getItem('todos');
      if (!todos) {
        return null;
      }
  
      return JSON.parse(todos);
    };
  
    const getGoalsFormStorage = () => {
      let goals = localStorage.getItem('goals');
  
      if (!goals) {
        return null;
      }
  
      return JSON.parse(goals);
    };
  
    const mockRequest = (action) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(action());
        }, 1000);
      });
    };
  
    const addTodo = (text) => {
      return mockRequest(() => {
        const newTodo = {
          id: `todo-${+new Date()}`,
          text,
          complete: false
        };
  
        todos = [...todos, newTodo];
  
        saveTodosToStorage();
  
        return newTodo;
      });
    };
  
    const getTodo = () => {
      return mockRequest(() => {
        return JSON.parse(JSON.stringify(todos));
      });
    };
  
    const deleteTodo = (id) => {
      return mockRequest(() => {
        const todoToBeDeleted = todos.find((todo) => todo.id === id);
  
        if (todoToBeDeleted.complete) {
          todos = todos.filter((todo) => todo.id !== id);
          saveTodosToStorage();
        }
      });
    };
  
    const toggleTodo = (id) => {
      return mockRequest(() => {
        todos = todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, complete: !todo.complate };
          }
  
          return todo;
        });
  
        saveTodosToStorage();
      });
    };
  
    const addGoal = (text) => {
      return mockRequest(() => {
        const newGoal = {
          id: `goal-${+new Date()}`,
          text
        };
  
        goals = [...goals, newGoal];
  
        saveGoalsToStorage();
  
        return newGoal;
      });
    };
  
    const getGoal = () => {
      return mockRequest(() => {
        return JSON.parse(JSON.stringify(goals));
      });
    };
  
    const deleteGoal = (id) => {
      return mockRequest(() => {
        goals = goals.filter((goal) => goal.id !== id);
        saveGoalsToStorage();
      });
    };
  
    let todos = getTodosFormStorage() || [
      {
        id: 'todo-1664268511621',
        text: 'Mencuci sepeda motor',
        complete: false
      },
      {
        id: 'todo-1664268553422',
        text: 'Menjemput adik sekolah',
        complete: false
      }
    ];
  
    let goals = getGoalsFormStorage() || [
      {
        id: 'goal-1664268511621',
        text: 'Belajar React'
      },
      {
        id: 'goal-1664268511622',
        text: 'Belajar Redux'
      }
    ];
  
    return {
      addTodo,
      getTodo,
      deleteTodo,
      toggleTodo,
      addGoal,
      getGoal,
      deleteGoal
    };
  })();
  
  export default mockAPI;
  