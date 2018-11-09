import { Component, Input } from "@angular/core";
import { trigger, state, style, animate, transition, keyframes, query, stagger} from "@angular/animations";

@Component({
  selector: "tree-structure",
  templateUrl: "./tree-structure.component.html",
  styleUrls: ["./tree-structure.component.sass"],
  animations: [
    trigger('slideInLeft', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('120ms', [
          animate('0.5s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-25%)', offset: 0}),
            style({opacity: .5, transform: 'translateX(15px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
    trigger('slideInDown', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('120ms', [
          animate('0.5s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-25%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(15px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
        ]))]), {optional: true}),
        query(':leave', stagger('-120ms', [
          animate('0.2s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0, transform: 'translateY(-25%)', offset: 1.0}),
        ]))]), {optional: true})
      ])
    ]),
  ]
})

export class TreeStructureComponent {
  @Input() direction;
  @Input() steps;
  @Input() day;
  @Input() currentState;

  constructor() {}

  selectThisStep(task, i) {
    //if the parent task is clicked make subtask visible
    task.stepsVisible = !task.stepsVisible;


    //if it's not the firs element
    //and the preceding element has been done
    //then select it and start animation
    console.log(task);
    if (i > 0 && this.steps[i - 1].done === true) {
      task.selected = true;
      //changeState("state2");
    };
    if (i = 0) {
      task.selected = true;
    }

  }


  horOrVert(i) {
    if (this.direction === "vert") {
      return 'horiz'
    } else {
      return 'vert'
    }
  }

  ngOnInit(): void {
    //add stepVisible: false to each element so that it can become visible only when it's clicked
    this.steps.map((step) => {
      step = {
        stepVisible: false
      }
    })

  }
}
