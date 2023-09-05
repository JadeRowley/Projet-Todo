import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/core/services/task/task.service';
import { Status, Task } from 'src/app/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  @Input() task : Task = {id: -1, title: '', description: '', status: Status.DOING};
  eStatus = Status;

  constructor(private taskService: TaskService) { }

  deleteTask(){
    this.taskService.deleteTask(this.task.id)
  }

  updateStatus(statusValue: string){
    const newStatus : Status = +statusValue;

    this.task.status = newStatus;
    this.taskService.updateTask(this.task)
  }

}
