import { Component, Input, Output, EventEmitter } from "@angular/core";
import { url } from "inspector";
import { Observable } from "../../../../node_modules/rxjs";


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
  @Output() completed = new EventEmitter<boolean>();

  position = 0;
  currentFrame = 0;
  lastFrame = false //needed to fade out the last frame
  constructor() { }

  //animation where the frames fade one into the other
  fadeSpriteAnimation() {
    console.log(this.currentFrame );
    if (this.currentFrame <= this.numberOfFrames) {
      document.getElementById("sprite").style.backgroundPosition = this.position + 'px 0px';
      setTimeout(() => {
        this.currentFrame++;
        this.fadeSpriteAnimation();
        this.position = this.position - this.singleImageWidth;
      }, this.frameDuration);
    } else {
      console.log("last frame");
      this.fadeOutAnimation();
      /* this.currentFrame = 0;
      this.position = this.totalImageWidth;
      this.completed.emit(true); */
    };
  }

  fadeOutAnimation() {
    let timingOfLastFrame = (this.frameDuration/1000)*3;
    console.log(timingOfLastFrame);
    this.lastFrame = true;
    document.getElementById("sprite").style.webkitTransition = "opacity " + timingOfLastFrame + "s";
    document.getElementById("sprite").style.transition = "opacity " + timingOfLastFrame + "s"; 
    //wait the time of the last frame, then reset everything
    setTimeout(() => {
      this.currentFrame++;
      this.position = this.position - this.singleImageWidth;
      this.lastFrame = false;
      this.completed.emit(true); //say the animation is over
    }, 5000);
  }

  ngOnInit() {
    this.completed.emit(false); //the animation is not done yet, so completed = false
    //set the basics features for the sprite div
    this.position = this.totalImageWidth;
    document.getElementById("sprite").style.width = this.singleImageWidth + "px";
    document.getElementById("sprite").style.height = this.singleImageHeight + "px";
    document.getElementById("sprite").style.backgroundImage = 'url(' + this.image + ')';
    switch (this.type) {
      case "fadeSprite":
        this.fadeSpriteAnimation();
    }
  }

}
