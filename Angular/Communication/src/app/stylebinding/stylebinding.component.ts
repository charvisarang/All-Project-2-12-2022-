import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styles: [`
  .text-success{color:green;}
  .text-danger{color:red;}
.text-special{font-style:italic;}
  `]
})
export class StylebindingComponent implements OnInit {
  public flower = "Rose";
  public hasCheck = false; //style binding
  public hasSpecial = false;

  public multipleClass = {
    "text-success": !this.hasCheck,
    "text-danger":this.hasCheck,
    "text-special": this.hasSpecial
  }
  constructor() {
   
   }
  ngOnInit(): void {
  }
 
}
