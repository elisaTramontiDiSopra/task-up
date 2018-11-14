import { Component, ViewChild } from "@angular/core";

@Component({
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.sass"]
})
export class CalendarComponent {
  today = "mon";
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

  constructor() {}
}
