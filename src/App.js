import { BoardProvider } from './context/boardContext';
import { Board } from './components/Board';
import { FocusTimer } from './components/FocusTimer';
import { SettingsPanel } from './components/SettingsPanel';

function App() {
  return (
    <div className="bg-gray-500 min-h-screen">
      <BoardProvider>
        <h1 className="bg-gray-800 shadow-lg p-8 text-white text-3xl text-center font-bold">
          Mini kanban
        </h1>
        <div className="m-8">
          <Board></Board>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <FocusTimer></FocusTimer>
            <SettingsPanel></SettingsPanel>
          </div>
        </div>
      </BoardProvider>
    </div>
  );
}

export default App;
