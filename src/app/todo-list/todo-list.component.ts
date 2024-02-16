import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'], // Note the correct property name here
})
export class TodoListComponent implements OnInit { // Implement OnInit interface
  constructor(private storeData: TodoStoreService) {}

  arrayFromStore: any;

  onDelete = (x: any) => {
    console.log(x);
    this.storeData.removeItem(x);
    this.arrayFromStore = this.storeData.todoListArray; // Update arrayFromStore after removing item
  };

  ngOnInit(): void {
    this.arrayFromStore = this.storeData.todoListArray;
  }
}