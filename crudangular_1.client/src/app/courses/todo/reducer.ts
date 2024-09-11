
import { createReducer, on } from '@ngrx/store';
import { dodajTodo, usunTodo } from './actions';

export interface Todo {
  id: number;
  tresc: string;
}

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(dodajTodo, (state, { tresc }) => [
    ...state,
    { id: state.length + 1, tresc }
  ]),
  on(usunTodo, (state, { id }) => state.filter(todo => todo.id !== id))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
