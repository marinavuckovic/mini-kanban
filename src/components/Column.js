import { useContext } from 'react';
import { BoardContext } from '../context/boardContext';
import { TaskCard } from './TaskCard';

export function Column({ status }) {
  const { boardState } = useContext(BoardContext);

  return (
    <div>
      <h2>{status}</h2>
      <div>
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
