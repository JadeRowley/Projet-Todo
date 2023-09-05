import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TaskComponent,
    TaskListComponent,
    TaskModalComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
})
export class TodoListModule { }
