import { Component } from '@angular/core';

@Component({
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.sass'],
})
export class AdminEditComponent {
  selectedTab = 'mon';
  mondayTasks=[
    {name: "step1", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step2", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step3", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step4", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
  ];

  constructor() { }

  move(task, i, direction) {
    let tempTask = task;
    this.mondayTasks.splice(i, 1); //remove task
    if(direction === "up") {
      this.mondayTasks.splice(i-1, 0, tempTask);
    } else {
      this.mondayTasks.splice(i+1, 0, tempTask);
    }
  }

}
