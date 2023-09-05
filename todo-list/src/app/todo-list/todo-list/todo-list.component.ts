import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task/task.service';
import { Status, Task } from 'src/app/model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    const task1: Task = {
      id: 0,
      title: "Task 1",
      description: "Description 1",
      status: Status.DOING,
    };

    const task2: Task = {
      id: 0,
      title: "Task 2",
      description: "Description 2",
      status: Status.DONE,
    };

    const task3: Task = {
      id: 0,
      title: "Task 3",
      description: "Description 3",
      status: Status.WAITING,
    };

    taskService.addTask(task1);
    taskService.addTask(task2);
    taskService.addTask(task3);

    this.tasks = taskService.getTasks();
  }

  filterTasks(filteredtasks: Task[]){
    this.tasks = filteredtasks;
  }


}
