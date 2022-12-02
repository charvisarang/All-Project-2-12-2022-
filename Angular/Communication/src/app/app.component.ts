import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstproject';
  parentcolor="Black";
  childcolor=['red','yellow','orange','violet'];

addColor(newchildcolor:string):void//function addcolor
{
this.childcolor.push(newchildcolor);
}
}
