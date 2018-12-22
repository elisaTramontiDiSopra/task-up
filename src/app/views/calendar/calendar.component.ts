import { Component, ViewChild } from "@angular/core";

@Component({
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.sass"]
})
export class CalendarComponent {
  today = "mon";
  week = ['mon','tue','wed','thu','fri','sat','sun'];
  data = [
    {
      name: "School",
      img: "image",
      done: false,
      skipped: false,
      completed: false,
      steps: [
        {
          name: "Bus stop",
          img: "image",
          done: false,
          skipped: false,
          completed: false,
          steps: []
        },
        {
          name: "Bus",
          img: "image",
          done: false,
          skipped: false,
          completed: false,
          steps: [
            {
              name: "Go to the stop",
              img: "image",
              done: false,
              skipped: false,
              steps: []
            },
            {
              name: "Wait 4 bus",
              img: "image",
              done: false,
              skipped: false,
              steps: []
            }
          ]
        },
        {
          name: "Sit on bus",
          img: "image",
          done: false,
          skipped: false,
          steps: []
        }
      ]
    },
    {
      name: "step 2",
      img: "image",
      steps: [],
      done: false,
      skipped: false,
      selected: false,
      completed: false
    },
    {
      name: "step 3",
      img: "image",
      steps: [],
      done: false,
      skipped: false,
      selected: false,
      completed: false
    }
  ];

  constructor() { }
  ngOnInit() {
    //get today value and visualize the calendar accordingly
    let todayDate = new Date();
    console.log(todayDate.getDay());
    switch (todayDate.getDay()) {
      case 0:
        this.today = 'sun';
        break;
      case 1:
        this.today = 'mon';
        break
      case 2:
        this.today = 'tue';
        break
      case 3:
        this.today = 'wed';
        break
      case 4:
        this.today = 'thu';
        break
      case 5:
        this.today = 'fri';
        break
      case 6:
        this.today = 'sat';
        break;
    }
  }
}
