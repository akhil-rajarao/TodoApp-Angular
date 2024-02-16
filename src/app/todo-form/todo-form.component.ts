import { Component } from '@angular/core';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  constructor(private storeData: TodoStoreService) {}
  writtenTodo: any;
  writtenInput = (eve: any) => {
    eve.target.value;
    this.writtenTodo = eve.target.value;
  };
  onReset = () => {
    this.writtenTodo = '';
  };

  onSubmittingTodo = () => {
    this.storeData.todoListArray.push(this.writtenTodo);
    this.writtenTodo = '';
    console.log(this.storeData.todoListArray);
  };
}
