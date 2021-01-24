import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';

export const addTodo = createAction(
  '[Todos Component] Add todo',
  props<Todo>()
);
