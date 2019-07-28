import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos: Todo[]
  message: string
  // todos =[
  //  new Todo(1,'test1', false, new Date()),
  //  new Todo(2,'test2', false, new Date()),
  //  new Todo(3,'test3', false, new Date())
  // ]

  constructor(private todoService: TodoDataService, private router:Router) { }

  ngOnInit() {
    this.refreshTodos()

  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('praful').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`deleteTodo ${id}`)
    this.todoService.deleteTodo('praful', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of todo ${id} Successful!`
        this.refreshTodos()
      }

    )
    
  }

  updateTodo(id){
    console.log(`Update todo ${id}`)
    this.router.navigate(['todos',id])

  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
