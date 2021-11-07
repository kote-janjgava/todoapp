import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[] = [

    new TodoItem(
    'მაღაზია',
    'მაღაზიაში ვიყიდო პროდუქტები'),
    new TodoItem(
      'სახლი',
      'დავალაგო სახლი'),

      new TodoItem(
        'სამსახური',
        'იმუშაო პროექტებზე'),


   ];

   InProgressList : TodoItem[] = [];
   TaskDone : TodoItem[] = [];



moveToInProgressList(task: TodoItem){
this.todos = this.todos.filter((t)=> t !== task);
this.InProgressList = [...this.InProgressList,task];
}

moveToInTaskDone(task: TodoItem){
  this.InProgressList = this.InProgressList.filter((t)=> t !== task);
  this.TaskDone = [...this.TaskDone,task];
  }
  moveToTodos(task: TodoItem){
    this.TaskDone = this.TaskDone.filter((t)=> t !== task);
    this.todos = [...this.todos,task];
  }




  constructor() { }

  ngOnInit(): void {
  }

}
