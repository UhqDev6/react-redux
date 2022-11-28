import { ActionType } from "../../utils/ActionType";

const goalsReducer = (goals = [], action = {}) => {
    // if (action.type === 'ADD_GOAL') {
    //   return [...goals, action.payload];
    // }
  
    // if (action.type === 'DELETE_GOAL') {
    //   return goals.filter((goal) => goal.id !== action.payload.id);
    // }
  
    // if (action.type === 'RECEIVE_GOALS') {
    //   return action.payload.goals;
    // }

    switch (action.type) {
      case ActionType.ADD_GOAL:
        return [...goals, action.payload];
      case ActionType.DELETE_GOAL:
        return goals.filter((goal) => goal.id !== action.payload.id);
      case ActionType.RECEIVE_GOALS:
        return action.payload.goals;
    
      default:
        return goals;
    }


  };
  
  export { goalsReducer };
  