import { createContext, useReducer, useState } from 'react';
import { boardReducer } from '../reducer/boardReducer';
import { initialState } from '../reducer/initialState';

export const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [boardState, dispatch] = useReducer(boardReducer, initialState);
  const [focusDurationMinutes, setFocusDurationMinutes] = useState(25);
  const [showCreatedAt, setShowCreatedAt] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <BoardContext.Provider
      value={{
        boardState,
        dispatch,
        focusDurationMinutes,
        setFocusDurationMinutes,
        showCreatedAt,
        setShowCreatedAt,
        isRunning,
        setIsRunning
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
