import mockAPI from '../../data/mockAPI';

const addGoalActionCreator = ({ id, text }) => {
  return {
    type: 'ADD_GOAL',
    payload: {
      id,
      text
    }
  };
};

const deleteGoalActionCreator = (id) => {
  return {
    type: 'DELETE_GOAL',
    payload: {
      id
    }
  };
};

const receiveGoalsActionCreator = (goals) => {
  return {
    type: 'RECEIVE_GOALS',
    payload: {
      goals
    }
  };
};

const asyncReceiveGoals = () => {
  return async (dispatch) => {
    const goals = await mockAPI.getGoal();
    dispatch(receiveGoalsActionCreator(goals));
  };
};

const asyncAddGoal = (text) => {
  return async (dispatch) => {
    const { id } = await mockAPI.addGoal(text);
    dispatch(addGoalActionCreator({ id, text }));
  };
};

const asyncDeleteGoal = (id) => {
  return async (dispatch) => {
    await mockAPI.deleteGoal(id);
    dispatch(deleteGoalActionCreator(id));
  };
};

export { addGoalActionCreator, deleteGoalActionCreator, asyncReceiveGoals, asyncAddGoal, asyncDeleteGoal };
