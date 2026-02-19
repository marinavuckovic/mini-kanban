import { useContext, useState } from 'react';
import { BoardContext } from '../context/boardContext';

export function TaskCard({ task }) {
  const statuses = ['todo', 'doing', 'done'];
  const { dispatch, showCreatedAt } = useContext(BoardContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  return (
    <div className="bg-gray-600 m-3 p-6 rounded-md flex flex-col gap-2 shadow-lg">
      {' '}
      <div className="flex justify-evenly">
        {isEditing ? (
          <input
            className="text-lg p-1 bg-gray-300 text-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:bg-gray-200"
            type="text"
            placeholder="Edit title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          ></input>
        ) : (
          <h3 className="text-2xl text-center text-gray-100 font-selibold">{task.title}</h3>
        )}
      </div>
      <div className="flex gap-3 justify-evenly">
        <select
          className="bg-gray-200 px-3 py-2 rounded text-gray-400 focus:outline-none hover:bg-gray-500 shadow-lg"
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
          className="px-3 py-1 rounded bg-gray-500 hover:bg-gray-700 shadow-lg"
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
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          className="px-3 py-1 rounded bg-gray-500 hover:bg-red-500 hover:text-white shadow-lg"
          onClick={() => {
            dispatch({
              type: 'DELETE_TASK',
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </div>
      <div className="">
        {showCreatedAt && (
          <p className="text-center text-sm text-gray-400">
            Created at: {new Date(task.createdAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}
