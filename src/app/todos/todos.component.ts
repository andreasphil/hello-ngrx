import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { addTodo } from 'src/app/store/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$: Observable<Array<Todo>>;

  newTodoTitle: string;

  constructor(private store: Store<{ todos: Array<Todo> }>) {
    this.todos$ = this.store.select('todos');
  }

  ngOnInit(): void {}

  addTodo() {
    this.store.dispatch(addTodo({ title: this.newTodoTitle, done: false }));
    this.newTodoTitle = '';
  }
}
