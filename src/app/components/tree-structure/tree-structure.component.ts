import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.sass'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('close', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('*=>state1', animate('300ms')),
      transition('*=>state2', animate('500ms'))
    ])
  ]
})

export class TreeStructureComponent {
  @Input() data;
  @Input() steps;
  @Input() day;
  @Input() currentState;

  constructor() { }

  selectThisStep(task, i) {
    //if it's not the firs element
    //and the preceding element has been done
    //then select it and start animation
    console.log(this.steps[i-1]);
    if (i > 0 && this.steps[i-1].done === true) {
      task.selected = true;
      changeState("state2");
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
