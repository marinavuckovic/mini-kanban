import { useState, useContext, useRef, useEffect } from 'react';
import { BoardContext } from '../context/boardContext';
import { useDebounce } from 'use-debounce';

export function AddTaskForm() {
  const [inputText, setInputText] = useState('');
  const [debouncedValue] = useDebounce(inputText, 500);
  const { boardState, dispatch } = useContext(BoardContext);
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, [boardState.tasks.length]);

  return (
    <form
      className="flex gap-5 justify-center mt-6 mb-6"
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
        className="px-3 py-2 mb-5 bg-gray-300 shadow-lg rounded focus:ring-1 focus:outline-none focus:ring-indigo-700 focus:bg-gray-200 focus:text-gray-400"
        ref={focusRef}
        type="text"
        placeholder="Title"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button 
        className='px-3 py-1 mb-5 rounded bg-gray-500 hover:bg-sky-500 shadow-lg'
        type="submit">Add task</button>
    </form>
  );
}
