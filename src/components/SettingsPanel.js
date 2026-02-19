import { useContext } from 'react';
import { BoardContext } from '../context/boardContext';

export function SettingsPanel() {
  const {
    showCreatedAt,
    setShowCreatedAt,
    focusDurationMinutes,
    setFocusDurationMinutes,
    isRunning,
  } = useContext(BoardContext);

  return (
    <div className="flex flex-col justify-between items-center gap-3 bg-gray-700 rounded mx-5 mb-5 shadow-lg">
      <h1 className="shadow-lg bg-gray-800 rounded-md text-gray-200 font-bold px-8 py-6 w-full text-center  ">
        Settings
      </h1>
      <div className="bg-gray-800 px-8 py-4 rounded shadow-lg m-5">
        <label className="text-gray-300" htmlFor="number-input">
          Minutes:{' '}
        </label>
        <input
          className="bg-gray-300 rounded text-center w-[80px] focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:bg-gray-200"
          id="number-input"
          disabled={isRunning}
          type="number"
          defaultValue={focusDurationMinutes}
          onChange={(e) => {
            setFocusDurationMinutes(Number(e.target.value));
          }}
        ></input>
      </div>
      <label className="flex items-center gap-3 cursor-pointer">
        <div className="relative">
          <input
            className="sr-only peer"
            type="checkbox"
            id="ch"
            checked={showCreatedAt}
            onChange={(e) => {
              setShowCreatedAt(e.target.checked);
            }}
          />
          <div className="w-11 h-6 bg-gray-500 rounded-full mb-5 peer-checked:bg-sky-500 transition-colors duration-300"></div>
          <div className='absolute top-0.5 left-0.5 w-5 h-5 bg-gray-700 rounded-full peer-checked:translate-x-5 transition-transform duration-300 peer-checked:bg-sky-700'></div>
        </div>
        <span className='mb-5 text-gray-300 text-sm'>Show Created Date</span>
      </label>
    </div>
  );
}
