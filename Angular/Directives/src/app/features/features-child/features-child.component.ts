import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-features-child',
  templateUrl: './features-child.component.html',
  styleUrls: ['./features-child.component.scss']
})
export class FeaturesChildComponent implements OnInit {
  public title = 'Welcome to my child page ';
  // Parent to Child
  @Input() cname = "I am Child";
  // Child to Parent
  @Output() newname = new EventEmitter<string>;
  public test:string="";
  constructor() { }

  ngOnInit(): void {
  }
  onadd() {
    this.newname.emit(this.test);
    console.log('button clicked');
  }
}
