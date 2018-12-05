import { Component } from '@angular/core';
import { simpleFadeIn } from './../../utils/animations';
import * as _ from "underscore";
import { Observable } from '../../../../node_modules/rxjs';

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
  foesNumber;
  randomFoes = [];
  foeIndex = 0;

  layer01 = true; layer02 = true; //layer00 = bg, layer04 = ground

  constructor() { }


  setAssetsBasedOnLevel(level) {

    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        if (false) {
          reject();
        } else {
          resolve();
        }
      }, 1000);
    });
    return promise;


    switch (level) {
      case 4:
        //set invisible levels
        //this.layer01 = false;
        //this.layer02 = false;
        //set timing and number of foes
        this.timing = 10000 / level;
        this.foesNumber = 2 * level;
        //randomly select an item from the foe array for foesNumber times 
        //add its random order and make it not visible at first
        for (let i = 0; i < this.foesNumber; i++) {
          let randomElement = this.foes[Math.floor(Math.random() * this.foes.length)];
          randomElement["order"] = i;
          randomElement["visible"] = false;
          this.randomFoes.push(randomElement);
        }
        return this.randomFoes
        //divide the random selected elements based on their layer 
        //this.randomFoes = _.groupBy(this.randomFoes, foe => foe.layer);
        console.log(this.randomFoes);
        //set the first element visible
        this.randomFoes[0].visible = true;
        break;
      case 2:
        //set invisible levels
        this.layer01 = false; this.layer02 = false;
        break;
    }
  }

  nextFoe(order) {
    //move to the next foe
    this.randomFoes[order].visible = false;
    order++;
    this.randomFoes[order].visible = true;
    
    //then wait for timing and go to the next foe
    setTimeout(function() {
      this.nextFoe(order);
    }, 2000);
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
    /* setTimeout(function() {
      console.log(this.randomFoes);
      this.randomFoes[0].visible = true;
    }, 3000); */
  }

}
