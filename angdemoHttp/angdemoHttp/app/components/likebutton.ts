import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'like-btn',
  outputs: ['likeBtnClicked'],
  inputs: ['counter'],
  template: `
  <button (click)="like()">LikeIT</button>
  `
})

export class LikeButton{
    counter: number;
    //private counter = 1;
    public likeBtnClicked: EventEmitter<number> = new EventEmitter();

    like(){
      this.counter++;
      this.likeBtnClicked.emit(this.counter);
    }
}
