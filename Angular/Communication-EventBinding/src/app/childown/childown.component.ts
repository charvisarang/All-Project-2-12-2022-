import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childown',
  templateUrl: './childown.component.html',
  styleUrls: ['./childown.component.scss']
})
export class ChildownComponent implements OnInit {
@Input() cname:string="charvi";
@Output() newnames=new EventEmitter<string>;

public test:string="";

constructor(){

}
  ngOnInit(): void {
  }
addNames(){
  this.newnames.emit(this.test);
}
}

