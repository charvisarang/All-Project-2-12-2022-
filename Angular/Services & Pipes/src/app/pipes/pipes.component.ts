import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl:'./pipes.component.html',
  styles: [`h2{color:red;};.N{border:5px solid grey;margin:50px}h1{color:orange}`]
})
export class PipesComponent implements OnInit {
public firstname="This is a Pipes Name";
public lastname="This a Pipes LastName";
public person={
  "mname":"manthan",
  "cname":"charvi"
}
  constructor() { }

  ngOnInit(): void {
  }

}
