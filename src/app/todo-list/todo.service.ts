import { Subject } from "rxjs";
import { Todo } from "./todo.model";


export class TodoService{
    todosChanged = new Subject<Todo[]>();
    startedEditing = new Subject<number>();
    private todos: Todo[] = [
        new Todo("Call Mommy", false), 
        new Todo("Get food for kitty", false)
    ];
    getTodos(){
        return this.todos.slice();
    }
    getTodo(index:number){
        return this.todos[index];
    }
    addTodo(item: Todo){
        this.todos.push(item);
        this.todosChanged.next(this.todos.slice());
    }
    deleteTodo(index: number){
        this.todos.splice(index, 1);
        this.todosChanged.next(this.todos.slice());
    }
    updateTodo(index: number, todo: Todo){
        this.todos[index] = todo;
        this.todosChanged.next(this.todos.slice());
    }


}