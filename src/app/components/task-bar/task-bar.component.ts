import { Component, Input } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: "task-bar",
  templateUrl: "./task-bar.component.html",
  styleUrls: ["./task-bar.component.sass"],
})
export class TaskBarComponent {
  @Input() task;

  constructor(private translateService: TranslateService) {}

  ngOnInit() { }

}

