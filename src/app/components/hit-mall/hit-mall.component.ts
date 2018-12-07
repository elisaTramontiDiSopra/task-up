import { Component } from '@angular/core';
import { simpleFadeIn } from './../../utils/animations';
import * as _ from "underscore";
import { Observable } from '../../../../node_modules/rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  templateUrl: './hit-mall.component.html',
  styleUrls: ['./hit-mall.component.sass'],
  selector: 'hit-mall',
  animations: [simpleFadeIn]
})
export class HitMallComponent {

  imageFolderName = "hit-mall";
  img00; img01; img02; img03; imgFoe;

  //foe positions, measured from bottom left, (x,y)
  /* foes = {
    layer00: [{x: 38, y:36, width: 8, layer: "layer00" }], //over layer0
    layer01: [{x: 45, y:16, width: 12, layer: "layer01"}, {x: 73, y:14, width: 15, layer: "layer01"}, {x: 1, y:13, width: 14, layer: "layer01"}], //over layer01
    //layer02: [{x: 13, y:13, width: 14}], //over layer02
    layer03: [{x: 26, y:13, width: 18, layer: "layer03"}], //over layer03
  }; */

  foes = [
    { x: 38, y: 36, width: 8, layer: "layer00" },
    { x: 45, y: 16, width: 12, layer: "layer01" },
    { x: 73, y: 14, width: 15, layer: "layer01" },
    { x: 1, y: 13, width: 14, layer: "layer01" },
    { x: 26, y: 13, width: 18, layer: "layer03" }
  ];


  level = 4;
  timing = 2;

  layer01 = true; layer02 = true; //layer00 = bg, layer04 = ground

  //var for handling foes appearing one after another trough the game
  foesNumber;
  randomFoes = [];
  private foeCounter = 0;
  foeIndex = new BehaviorSubject(this.foeCounter);
  timeOutToReset;

  //points
  points = 0;

  constructor() { }

  setTimingAndfoesNumber(level) {
    this.timing = 8000 / level;
    this.foesNumber = 2 * level;
    //set invisible levels
    switch (level) {
      case 1:
        this.layer01 = false;
        this.layer02 = false;
      case 2:
        this.layer01 = true;
        this.layer02 = false;
      case 3:
        this.layer01 = true;
        this.layer02 = true;
    }
  }


  setAssetsBasedOnLevel(level) {
    this.setTimingAndfoesNumber(level);
    //randomly select an item from the foe array for foesNumber times 
    //add its random order and make it not visible at first
    for (let i = 0; i < this.foesNumber; i++) {
      let randomElement = this.foes[Math.floor(Math.random() * this.foes.length)];
      randomElement["visible"] = false;
      this.randomFoes.push(randomElement);
    }
    //set the first element visible
    this.randomFoes[0].visible = true;
  }

  //turn this up here into ann observable
  //when the randome foeas is done stop loading

  nextFoe(clickedValue) {
    //count the points only if the function is fired from a clic on the foe
    if (clickedValue === true) {this.points++}
    //reset the timeout timer
    clearTimeout(this.timeOutToReset);
    //hide previous monster and show the next
    this.randomFoes[this.foeCounter].visible = false;
    this.foeCounter++;
    this.randomFoes[this.foeCounter].visible = true;

    this.foeIndex.next(this.foeCounter);
    this.timeOutToReset = setTimeout(() => { this.nextFoe(false) }, this.timing);
    if (this.foeCounter === this.foesNumber + 1) { this.foeIndex.complete() }
  }

  ngOnInit() {
    //set the images bg
    this.img00 = "/images/" + this.imageFolderName + "/00_layer.png";
    this.img01 = "/images/" + this.imageFolderName + "/01_layer.png";
    this.img02 = "/images/" + this.imageFolderName + "/02_layer.png";
    this.img03 = "/images/" + this.imageFolderName + "/03_layer.png";
    this.imgFoe = "/images/" + this.imageFolderName + "/foe.png";

    //set layers visibility
    this.setAssetsBasedOnLevel(this.level);


    //after 3 seconds make the first foe visible
    setTimeout(() => {
      this.nextFoe(false)
    }, 3000);
  }

}
