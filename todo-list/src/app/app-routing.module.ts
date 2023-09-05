import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';
import { TaskModalComponent } from './todo-list/components/task-modal/task-modal.component';

const routes: Routes = [
  { path: '', component: TodoListComponent,
  children: [
    {
      path: 'create', component: TaskModalComponent
    },
    {
      path: 'update/:taskId', component: TaskModalComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TodoListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
