import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'], 
  providers: [TodoService]
})

export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  private todosSub: Subscription;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.todosSub = this.todoService.todosChanged.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
  }
  onToggleTodo(index: number){
    this.todos[index].done = !this.todos[index].done;
    console.log(this.todos[index]);
  }
  

  ngOnDestroy(): void {
    this.todosSub.unsubscribe();
  }

}
