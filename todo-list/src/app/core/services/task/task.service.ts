import { Injectable } from '@angular/core';
import { Status, Task } from 'src/app/model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private currentId: number = 0;
  private tasks: Task[] = []

  constructor() { }

  getTasks(){
    this.sortTasks()
    return this.tasks
  }

  getTaskByStatus(status : Status){
    let filteredtasks : Task[] = [];
    for(let task of this.tasks){
      if(task.status === status){
        filteredtasks.push(task)
      }
    }

    return filteredtasks;
  }

  getTask(taskId: number){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].id === taskId){
        return this.tasks[i]
      }
    }

    return {id: -1, title: '', description: '', status: Status.DOING}
  }

  addTask(newTask: Task){
    newTask.id = this.currentId;
    this.tasks.push(newTask)
    this.currentId++;
    this.sortTasks()
  }

  deleteTask(taskId: number){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].id === taskId){
        this.tasks.splice(i, 1);
      }
    }
  }

  updateTask(task: Task){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].id === task.id){
        this.tasks[i] = task;
      }
    }
    this.sortTasks()
  }

  sortTasks(){
    this.tasks.sort((a, b) => a.status - b.status);
  }
}
