import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() childcolor="Pink";
@Output() newchildcolor =new EventEmitter<string>();//Eventemitter used to call parent function
  constructor() { }
  ngOnInit(): void {
  }
addColor(value:string) //function addcolor
{
  this.newchildcolor.emit(value);
}
}
