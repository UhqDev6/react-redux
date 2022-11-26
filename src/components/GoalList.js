import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addGoalActionCreator,
  asyncAddGoal,
  asyncDeleteGoal,
  asyncReceiveGoals,
  deleteGoalActionCreator
} from '../states/goals/action';
import GoalIput from './GoalInput';
import GoalItem from './GoalItem';

const GoalList = () => {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveGoals());
  }, [dispatch]);

  const onAddGoal = (text) => {
    dispatch(asyncAddGoal(text));
  };

  const onDeleteGoal = (id) => {
    dispatch(asyncDeleteGoal(id));
  };

  return (
    <div>
      <h3>My Goal</h3>
      <GoalIput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
