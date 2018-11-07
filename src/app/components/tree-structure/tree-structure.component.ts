import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.componentt.sass']
})

export class TreeStructureComponent {
  @Input() data;
  @Input() steps;
  @Input() color;

  constructor() { }


}
