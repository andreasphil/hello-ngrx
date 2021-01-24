import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import { addTodo } from 'src/app/store/todos.actions';

export type TodoAppState = Array<Todo>;

export const initialState: TodoAppState = [];

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, param) => [param, ...state])
);
