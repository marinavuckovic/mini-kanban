import { useContext, useState } from 'react';
import { BoardContext } from '../context/boardContext';

export function TaskCard({ task }) {
  const statuses = ['todo', 'doing', 'done'];
  const { dispatch, showCreatedAt } = useContext(BoardContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  return (
    <div>
      {' '}
      {isEditing ? (
        <input
          type="text"
          placeholder="Edit title"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        ></input>
      ) : (
        task.title
      )}
      <select
        defaultValue=""
        onChange={(e) => {
          dispatch({
            type: 'MOVE_TASK',
            id: task.id,
            status: e.target.value,
          });
        }}
      >
        <option value="" disabled>
          Move task
        </option>
        {statuses
          .filter((s) => s !== task.status)
          .map((op) => {
            return (
              <option key={op} value={op}>
                {op}
              </option>
            );
          })}
      </select>
      <button
        onClick={() => {
          dispatch({
            type: 'DELETE_TASK',
            id: task.id,
          });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          if (isEditing) {
            dispatch({
              type: 'EDIT_TASK_TITLE',
              id: task.id,
              title: newTitle,
            });
          }
          setIsEditing(!isEditing);
        }}
      >
        {isEditing ? 'Save changes' : 'Edit title'}
      </button>
      <br></br>
      {showCreatedAt && <p>Created at: {new Date(task.createdAt).toLocaleDateString()}</p>}
    </div>
  );
}
