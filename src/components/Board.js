import { FilterBar } from './FilterBar';
import { Column } from './Column';
import { AddTaskForm } from './AddTaskForm';

export function Board() {
  return (
    <div>
      <FilterBar></FilterBar>
      <Column status="Todo">{}</Column>
      <Column status="Doing"></Column>
      <Column status="Done"></Column>
      <AddTaskForm></AddTaskForm>
    </div>
  );
}
