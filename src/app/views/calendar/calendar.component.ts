import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent {

  today="mon";
  data = [
    {
      name: "School",
      img: "image",
      done: false,
      selected: false,
      steps: [
        {
          name: "Bus stop",
          img: "image",
          done: false,
        },
        {
          name: "Bus",
          img: "image",
          done: false,
          steps: [
            {
              name: "Go to the stop",
              img: "image",
            },
            {
              name: "Wait 4 bus",
              img: "image",
            }
          ],
        },
        {
          name: "Sit on bus",
          img: "image",
        },
      ],
    },
    {
      name: "step 2",
      img: "image",
      steps: [],
      done: false,
      selected: false,
    },
    {
      name: "step 3",
      img: "image",
      steps: [],
      done: false,
      selected: false,
    }
  ]

  constructor(
  ) {
  }


}
