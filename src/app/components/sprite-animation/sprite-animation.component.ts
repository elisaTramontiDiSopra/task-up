import { Component, Input } from "@angular/core";


@Component({
  selector: "schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.sass"],
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
    //set the basics features for the sprite div
    document.getElementById("sprite").style.width = this.singleImageWidth;
    document.getElementById("sprite").style.height = this.singleImageHeight;
    document.getElementById("sprite").style.backgroundImage = this.image;
    document.getElementById("sprite").style.height = this.singleImageHeight;
    switch (this.type) {
      case "fadeSprite":
      this.fadeSpriteAnimation();
    }
  }

}
