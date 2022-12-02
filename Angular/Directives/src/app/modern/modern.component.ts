import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.scss']
})
export class ModernComponent implements OnInit {
  // --------------------------------------------------------------NGIF
  public msg = true;
  public show = false;
public radio:string;

  public code: any = [];
  public selectedcountry: string = "";
  // --------------------------------------------------------------NGSWITCH
  public countries = [
    { code: 'IND', country: 'India' },
    { code: 'RUSS', country: 'Russia' },
    { code: 'UK', country: 'England' },
    { code: 'USA', country: 'America' },
  ];


  // --------------------------------------------------------------NGFOR
  students = [
    { id: 1, name: 'Parvati', city: 'Pune', class: '10th' },
    { id: 2, name: 'Laxmi', city: 'Nashik', class: '9th' },
    { id: 3, name: 'Sita', city:'Mumbai',class: '8th' },
    { id: 4, name: 'Sarashwati',city:'Surat' ,class: '7th' },
    { id: 5, name: 'Radha',city:'Banglore' ,class: '10th' },
  ]

  constructor() {
this.radio="";
  }
  ngOnInit(): void {
  }
  //  choice(code):void{
  // this.selectedcountry=code;
  //  }

}
