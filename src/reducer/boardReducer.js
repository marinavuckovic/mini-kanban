export function boardReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: crypto.randomUUID(),
            title: action.title,
            status: 'todo',
            createdAt: Date.now(),
          },
        ],
      };
    case 'MOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              status: action.status,
            };
          } else return task;
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.id),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    case 'EDIT_TASK_TITLE':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              title: action.title,
            };
          } else return task;
        }),
      };
    default:
      return state;
  }
}
