import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
public word:string;
public number:number=100;

constructor() { 
this.word="1Rivet";
//this.number=100;
  }

  ngOnInit(): void {
  }
checkButton(checkit:string){
  (checkit=='minus') ? this.number=this.number-10:this.number=this.number+10;
}
}
// if(checkit=='minus')
// {
//   this.number=this.number-10;
// }
// else{
//   this.number=this.number+10;
// }


