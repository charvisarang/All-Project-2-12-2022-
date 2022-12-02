import { Component ,Input,OnInit,SimpleChange,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.scss']
})
export class LifecyclehookComponent implements OnInit {
@Input() value:string="";
  
constructor() {
    console.log('Constructor Called');
    console.log(this.value);
   }
ngOnChanges(change:SimpleChange){
  console.log('onchanges called');
  console.log(change);

}
  ngOnInit(): void {
    console.log('onInit Called');
    //console.log(this.value);
  }
  ngDoCheck(){
console.log('docheck called');
  }
  ngAfterContentInit(){
    console.log('after content init');
  }
 ngAfterContentChecked(){
   console.log('after content checked');
}
ngAfterViewInit(){
  console.log('content view init');
}
ngAfterViewChecked(){
  console.log('after view checked');
}
ngDestroy():void{
  console.log('destroy called');
}
}

