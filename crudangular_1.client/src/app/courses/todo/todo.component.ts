import { Component } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Todo, todoReducer } from './reducer';
import { Store } from '@ngrx/store';
import { dodajTodo, usunTodo } from './actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [StoreModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  public todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = store.select('todos');
  }

  dodaj(tresc: string) {
    this.store.dispatch(dodajTodo({ tresc }));
  }

  usun(id: number) {
    this.store.dispatch(usunTodo({ id }));
  }
}
