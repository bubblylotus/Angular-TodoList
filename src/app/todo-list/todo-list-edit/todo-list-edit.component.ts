import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-edit',
  templateUrl: './todo-list-edit.component.html',
  styleUrls: ['./todo-list-edit.component.css']
})
export class TodoListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') todoForm: NgForm; 
  editMode = false;
  editedItemIndex: number;
  editedItem: Todo;
  subscription: Subscription;
  constructor(private todoService: TodoService) { }
  

  ngOnInit(): void {
    this.subscription = this.todoService.startedEditing.subscribe(
      (editIndex: number) => {
        this.editedItemIndex = editIndex;
        this.editMode = true;
        this.editedItem = this.todoService.getTodo(editIndex);
        this.todoForm.setValue({todoText: this.editedItem.text});
      }
    );
  }
  onAddTodo(form: NgForm){
    console.log(form.value);
    const newTodo = new Todo(form.value.todoText, false);
    if(this.editMode === true){
      this.todoService.updateTodo(this.editedItemIndex, newTodo);
    }
    else{
      this.todoService.addTodo(newTodo);
    }
    form.reset();
  }
  onClear(form: NgForm){
    form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
