import './App.css';
import { BoardProvider } from './context/boardContext';
import { Board } from './components/Board';
import { FocusTimer } from './components/FocusTimer';
import { SettingsPanel } from './components/SettingsPanel';

function App() {
  return (
    <BoardProvider>
      <h1>Mini kanban</h1>
      <Board></Board>
      <FocusTimer></FocusTimer>
      <SettingsPanel></SettingsPanel>
    </BoardProvider>
  );
}

export default App;
