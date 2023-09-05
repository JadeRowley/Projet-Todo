import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/core/services/task/task.service';
import { Status, Task } from 'src/app/model/task';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  eStatus = Status;
  selected : number = -1;

  @Output() taskEvent: EventEmitter<Task[]> = new EventEmitter<Task[]>()

  constructor(private taskService: TaskService) { }

  filterTasks(status : Status){
    if(this.selected === status){
      this.selected = -1;
      this.taskEvent.emit(this.taskService.getTasks())
    }
    else{
      this.selected = status;
      let filteredtasks = this.taskService.getTaskByStatus(status);
      this.taskEvent.emit(filteredtasks)
    }

  }

}
