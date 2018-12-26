import { Component, Input } from "@angular/core";
import { url } from "inspector";


@Component({
  selector: "sprite-animation",
  templateUrl: "./sprite-animation.component.html",
  styleUrls: ["./sprite-animation.component.sass"],
})
export class SpriteAnimation {
  @Input() image;
  @Input() singleImageHeight; //it's also the total image height cause the sprite is horizontal
  @Input() singleImageWidth; //just the single "frame" width
  @Input() totalImageWidth; //the whole image width
  @Input() frameDuration; //in milliseconds
  @Input() numberOfFrames;
  @Input() type; //fadeSprite

  position;
  currentFrame = 0;

  constructor() { }

  //animation where the frames fade one into the other
  fadeSpriteAnimation() {
    if (this.position < this.totalImageWidth) {
      this.position = this.position + this.singleImageWidth;
    } else (this.position = 0);
    this.animateSprite();
  }

  animateSprite() {
    if (this.currentFrame < this.numberOfFrames) {
      document.getElementById("sprite").style.backgroundPosition = this.position + 'px 0px';
      setTimeout(() => {
        this.currentFrame++;
        this.animateSprite()
      }, this.frameDuration);
    }
  }

  ngOnInit() { 
    //this.image="images/hit-mall/puffAnimation.png";
    console.log(this.image);
    //set the basics features for the sprite div
    document.getElementById("sprite").style.width = this.singleImageWidth + "px";
    document.getElementById("sprite").style.height = this.singleImageHeight + "px";
    document.getElementById("sprite").style.backgroundImage = this.image;
    switch (this.type) {
      case "fadeSprite":
      this.fadeSpriteAnimation();
    }
  }

}
