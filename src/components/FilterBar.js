import { useContext } from 'react';
import { BoardContext } from '../context/boardContext';

export function FilterBar() {
  const { dispatch } = useContext(BoardContext);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'SET_FILTER',
            filter: 'all',
          });
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'SET_FILTER',
            filter: 'todo',
          });
        }}
      >
        Todo
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'SET_FILTER',
            filter: 'doing',
          });
        }}
      >
        Doing
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'SET_FILTER',
            filter: 'done',
          });
        }}
      >
        Done
      </button>
    </div>
  );
}
