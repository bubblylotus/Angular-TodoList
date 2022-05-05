import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todoIndex: number;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  onDelete(){
    this.todoService.deleteTodo(this.todoIndex);
  }
  onEdit(){
    this.todoService.startedEditing.next(this.todoIndex);
  }
}
