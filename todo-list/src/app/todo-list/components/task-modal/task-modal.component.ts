import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/core/services/task/task.service';
import { Status, Task } from 'src/app/model/task';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent{

  valid : boolean = true;
  task: Task = {
    id: -1,
    title: '',
    description: '',
    status: Status.DOING
  };

  constructor(private router: Router, private taskService: TaskService, private activatedRoute: ActivatedRoute) {
    if(router.url.startsWith('/update')){
      let taskId: number;
      activatedRoute.params.subscribe(params => {
        console.log(params['taskId'])
        taskId = +params['taskId'];
        this.task = taskService.getTask(taskId);
      })
    }

    console.log(this.task)
  }

  save(titleValue: string, descriptionValue: string){
    if(titleValue === '' || descriptionValue === ''){
      this.valid = false;
    }
    else{
      if(this.router.url === '/create'){

        const newTask : Task = {
          id: -1,
          title: titleValue,
          description: descriptionValue,
          status: Status.DOING
        };

        this.taskService.addTask(newTask);
        this.router.navigateByUrl('')
      }

      else if(this.router.url.startsWith('/update')){
        const newTask: Task = {
          id: this.task.id,
          title: titleValue,
          description: descriptionValue,
          status: this.task.status
        }
        this.taskService.updateTask(newTask);
        this.router.navigateByUrl('')
      }
    }
  }
}
