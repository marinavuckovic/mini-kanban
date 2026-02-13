import { useState, useContext, useRef, useEffect } from 'react';
import { BoardContext } from '../context/boardContext';

export function FocusTimer() {
  const { focusDurationMinutes, setIsRunning } = useContext(BoardContext);
  const [timer, setTimer] = useState(focusDurationMinutes * 60);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimer(focusDurationMinutes * 60);
  }, [focusDurationMinutes]);

  const startInterval = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIsRunning(true);
  };
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimer(focusDurationMinutes * 60);
    setIsRunning(false);
  };
  return (
    <div>
      <h1>Focus Timer</h1>
      <h1>
        {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
      </h1>
      <button onClick={startInterval}>Start</button>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }}
      >
        Pause
      </button>
      <button onClick={resetInterval}>Reset</button>
    </div>
  );
}
