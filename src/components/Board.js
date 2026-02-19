import { FilterBar } from './FilterBar';
import { Column } from './Column';
import { AddTaskForm } from './AddTaskForm';

export function Board() {
  return (
    <div className='bg-gray-700 shadow-xl rounded text-gray-200'>
      <FilterBar></FilterBar>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-64">
        <Column status="Todo"></Column>
        <Column status="Doing"></Column>
        <Column status="Done"></Column>
      </div>
      <AddTaskForm></AddTaskForm>
    </div>
  );
}
