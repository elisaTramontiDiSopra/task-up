import { Component } from '@angular/core';

@Component({
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.sass'],
})
export class AdminEditComponent {
  selectedTab = 'mon';
  mondayTasks=[];

  allTasks=[
    {name: "step1", img: "image", steps: [
       {name: "step1", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
       {name: "step1", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
    ], done: false, skipped: false, selected: false, completed: false },
    {name: "step2", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step3", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step4", img: "image", steps: [], done: false, skipped: false, selected: false, completed: false },
  ];

  constructor() { }


}
