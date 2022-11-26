import react from 'react';

const GoalItem = ({ id, text, deleteGoal }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => deleteGoal(id)}>x</button>
    </div>
  );
};

export default GoalItem;
