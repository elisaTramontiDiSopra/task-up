import { FireServiceProvider } from './../../../services/firebase.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.sass'],
})
export class AdminEditComponent {
  selectedTab = 'mon';
  mondayTasks=[];
  tuedayTasks=[];
  wednesdayTasks=[];
  thursdayTasks=[];
  fridayTasks=[];
  saturdayTasks=[];
  sundayTasks=[];


  allTasks=[
    {name: "step1", img: "/images/default_pin.jpg", steps: [
       {name: "step1", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
       {name: "step1", img: "/images/default_pin.jpg", steps: [
        {name: "step1", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
        {name: "step1", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
       ], done: false, skipped: false, selected: false, completed: false },
       {name: "step1", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
       {name: "step1", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    ], done: false, skipped: false, selected: false, completed: false },
    {name: "step2", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step3", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step4", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },

    {name: "step2", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step3", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step4", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },

    {name: "step2", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step3", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step4", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },

    {name: "step2", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step3", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step4", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },

    {name: "step2", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step3", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step4", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },

    {name: "step2", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step3", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
    {name: "step4", img: "/images/default_pin.jpg", steps: [], done: false, skipped: false, selected: false, completed: false },
  ];

  constructor(private apiFirebase: FireServiceProvider) { }

  saveSchedule() {
    let weeklySchedule = {
      mon: this.mondayTasks,
      tue: this.tuedayTasks,
      wed: this.wednesdayTasks,
      thu: this.thursdayTasks,
      fri: this.fridayTasks,
      sat: this.saturdayTasks,
      sun: this.sundayTasks
    };
    this.apiFirebase.saveSchedule(weeklySchedule).then(r => console.log("Schedule saving: OK")) //
  }
}
