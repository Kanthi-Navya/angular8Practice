import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greeting = "";
  public color="black";
  public colors = ["red", "black", "blue", "green" ];
 displayName  = true;
 
//  component Interaction
 @Input('parentData') public name;
 @Output() public childEvent = new EventEmitter();
  constructor() { }



  ngOnInit() {
  }

  onClick(event) {
    console.log('welcome',event);
    this.greeting = 'welcome to angular project'
  }

  fireEvent() {
    this.childEvent.emit('hey, child event');
  }

}
