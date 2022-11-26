import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onTextChangeHandler = ({ target }) => setText(target.value);
  return (
    <div>
      <input type="text" value={text} onChange={onTextChangeHandler} />
      <button onClick={() => addTodo(text)}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
