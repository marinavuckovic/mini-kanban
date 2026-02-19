import { useContext } from 'react';
import { BoardContext } from '../context/boardContext';
import { TaskCard } from './TaskCard';

export function Column({ status }) {
  const { boardState } = useContext(BoardContext);

  return (
    <div className='h-full self-center m-2 bg-gray-700 rounded shadow-lg'>
      <h2 className='text-center p-2 bg-gray-800 rounded shadow-lg border-gray-500'>{status}</h2>
      <div className='flex flex-col gap-3'>
        {(boardState.filter === status.toLowerCase() || boardState.filter === 'all') &&
          boardState.tasks
            .filter((task) => task.status === status.toLowerCase())
            .map((task) => {
              return <TaskCard key={task.id} task={task}></TaskCard>;
            })}
      </div>
    </div>
  );
}
