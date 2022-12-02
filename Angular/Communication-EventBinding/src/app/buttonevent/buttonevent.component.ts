import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonevent',
  templateUrl: './buttonevent.component.html',
  styleUrls: ['./buttonevent.component.scss']
})
export class ButtoneventComponent implements OnInit {
  public words: string="1Rivet";
  public sizeNumber: number=100;
  constructor() {
    
  }
  changeSize(changing: String) {
    this.sizeNumber = (changing == 'minus') ? this.sizeNumber - 10 : this.sizeNumber + 10;
  }

  ngOnInit(): void {
  }

}
