import { useContext } from 'react';
import { BoardContext } from '../context/boardContext';

const filterOptions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Todo',
    value: 'todo',
  },
  {
    label: 'Doing',
    value: 'doing',
  },
  {
    label: 'Done',
    value: 'done',
  },
];

export function FilterBar() {
  const { dispatch } = useContext(BoardContext);

  return (
    <div className='flex justify-center'>
      {filterOptions.map((option) => (
        <button
          className='shadow-lg bg-gray-800 hover:bg-gray-500 rounded pl-5 pr-5 pt-2 pb-2 m-2'
          key={option.value}
          onClick={() => {
            dispatch({
              type: 'SET_FILTER',
              filter: option.value,
            });
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
