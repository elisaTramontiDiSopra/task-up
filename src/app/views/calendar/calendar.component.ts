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
      done: true,
      selected: false,
      /* steps: [
        {
          name: "Bus",
          img: "image", */
          /* steps: [
            {
              name: "Go to the stop",
              img: "image",
            },
            {
              name: "Wait 4 stops",
              img: "image",
            },
            {
              name: "Enter school",
              img: "image",
              steps: [
                {
                  name: "Math",
                  img: "image",
                  steps: [
                    {
                      name: "Grab the book",
                      img: "image",
                    },
                    {
                      name: "Go to room 102",
                      img: "image",
                    },
                  ],
                },
                {
                  name: "Eng",
                  img: "image",
                  steps: [
                    {
                      name: "Grab the book",
                      img: "image",
                    },
                    {
                      name: "Go to room 423",
                      img: "image",
                    },
                  ],
                }
              ],
            }
          ], */
     /*    }
      ], */
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
