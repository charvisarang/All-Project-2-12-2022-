import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fproject';
 

//childown
mname="Manvi";
cname=['a','b','c'];
newnames="";
addNames(newnames:string)
{
  this.cname.push(newnames);
}

}
