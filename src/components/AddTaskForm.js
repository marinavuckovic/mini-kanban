import { useState, useContext, useRef, useEffect } from 'react';
import { BoardContext } from '../context/boardContext';
import { useDebounce } from 'use-debounce';

export function AddTaskForm() {
  const [inputText, setInputText] = useState('');
  const [debouncedValue]=useDebounce(inputText, 500);
  const { boardState, dispatch } = useContext(BoardContext);
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, [boardState.tasks.length]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: 'ADD_TASK',
          title: debouncedValue,
        });
        setInputText('');
        // focusRef.current?.focus();
      }}
    >
      <input
        ref={focusRef}
        type="text"
        placeholder="Title"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button type="submit">Add task</button>
    </form>
  );
}
