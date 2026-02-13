import { useContext } from 'react';
import { BoardContext } from '../context/boardContext';

export function SettingsPanel() {
  const { showCreatedAt, setShowCreatedAt, focusDurationMinutes, setFocusDurationMinutes, isRunning } =
    useContext(BoardContext);

  return (
    <div>
      <h1>Settings</h1>
      <input
        disabled={isRunning}
        type="number"
        defaultValue={focusDurationMinutes}
        onChange={(e) => {
          setFocusDurationMinutes(Number(e.target.value));
        }}
      ></input>
      <br></br>
      <input
        type="checkbox"
        name="ch"
        checked={showCreatedAt}
        onChange={(e) => {
          setShowCreatedAt(e.target.checked);
        }}
      />
      <label htmlFor="ch">Show Created Date</label>
    </div>
  );
}
