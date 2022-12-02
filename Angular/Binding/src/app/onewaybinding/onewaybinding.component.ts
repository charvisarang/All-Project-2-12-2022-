import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.scss']
})
export class OnewaybindingComponent implements OnInit {
text:string="vlmkvkmkvkvvkmm";  
// isgreen :boolean=true; 
  constructor() { 
  }                                                              
  ngOnInit(): void {
  }
  // Event Binding
clickMe(){
console.log("Button has Clicked")
}
}
