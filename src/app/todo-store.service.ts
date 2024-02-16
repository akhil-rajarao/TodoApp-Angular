import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  constructor() {}
  todoListArray: string[] = [];
  removeItem = (xl: any) => {
    console.log(xl, 'from Store');

    this.todoListArray = this.todoListArray.filter((item) => item !== xl);
    console.log(this.todoListArray, 'from store')
  };
}
