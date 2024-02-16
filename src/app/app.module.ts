import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoStoreService } from './todo-store.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule
  ],
  providers: [
    provideClientHydration(),TodoStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
