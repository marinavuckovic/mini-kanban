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
    <div className="flex flex-col items-center gap-3 bg-gray-700 rounded mx-5 mb-5 shadow-lg">
      <h1 className="shadow-lg bg-gray-800 rounded-md text-gray-200 font-bold px-8 py-6 w-full text-center ">
        Focus Timer
      </h1>
      <h1 className="text-gray-300 font-bold px-8 py-3 w-full text-center font-mono text-6xl">
        {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
      </h1>
      <div className="w-full flex justify-evenly">
        <button
          className="my-3 px-3 py-2 text-gray-300 bg-gray-500 rounded shadow-lg hover:bg-green-500"
          onClick={startInterval}
        >
          Start
        </button>
        <button
          className="my-3 px-3 py-2 text-gray-300 bg-gray-500 rounded shadow-lg hover:bg-gray-800"
          onClick={() => {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }}
        >
          Pause
        </button>
        <button
          className="my-3 px-3 py-2 text-gray-300 bg-gray-500 rounded shadow-lg hover:bg-red-500"
          onClick={resetInterval}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
