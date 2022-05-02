import { Subject } from "rxjs";
import { Todo } from "./todo.model";


export class TodoService{
    todosChanged = new Subject<Todo[]>();
    private todos: Todo[] = [
        new Todo("Call Mommy", false), 
        new Todo("Get food for kitty", false)
    ];

    getTodos(){
        return this.todos.slice();
    }
    addTodo(item: Todo){
        this.todos.push(item);
        this.todosChanged.next(this.todos.slice());
    }
    deleteTodo(index: number){
        this.todos.splice(index, 1);
        this.todosChanged.next(this.todos.slice());
    }


}