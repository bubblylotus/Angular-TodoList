import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-edit',
  templateUrl: './todo-list-edit.component.html',
  styleUrls: ['./todo-list-edit.component.css']
})
export class TodoListEditComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  onAddTodo(form: NgForm){
    console.log(form.value);
    const newTodo = new Todo(form.value.todoText, false);
    this.todoService.addTodo(newTodo);
    form.reset();
  }
  onClear(form: NgForm){
    form.reset();
  }
}
