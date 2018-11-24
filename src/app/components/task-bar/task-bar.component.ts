import { Component, Input } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: "task-bar",
  templateUrl: "./task-bar.component.html",
  styleUrls: ["./task-bar.component.sass"],
})
export class TaskBarComponent {
  @Input() tasks;
  @Input() moveUpDown;
  @Input() addButton;
  @Input() addList;
  @Input() deleteButton;
  @Input() subtaskButton;

  constructor(private translateService: TranslateService) {}

  ngOnInit() { }

  move(task, i, direction) {
    let tempTask = task;
    this.tasks.splice(i, 1); //remove task
    if(direction === "up") {
      this.tasks.splice(i-1, 0, tempTask);
    } else {
      this.tasks.splice(i+1, 0, tempTask);
    }
  }

  addTask(task, i) {
    console.log(i);
    console.log(this.addList);
    this.addList.push(task);
    this.tasks.splice(i, 1);
  }
  removeTask(task, i) {
    console.log(i);
    console.log("REMOVE FROM ");
    console.log(this.tasks);
    console.log("ADD TO");
    console.log(this.addList);
    this.tasks.splice(i, 1);
    this.addList.push(task);
  }
  makeSubtask(task, i) {

  }
}

