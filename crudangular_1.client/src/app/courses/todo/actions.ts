
import { createAction, props } from '@ngrx/store';

export const dodajTodo = createAction(
  '[TODO] Dodaj',
  props<{ tresc: string }>()
);

export const usunTodo = createAction(
  '[TODO] Usuń',
  props<{ id: number }>()
);
