import { outputAst } from '@angular/compiler';
import { Component, OnInit ,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles:['p{background-color:yellow;color:black;text-align:center;padding:5px;font-size:20px}']
})
export class RegisterComponent implements OnInit {

@Input() public studentsdata:any;//Parent To Child
@Output() public godata=new EventEmitter();//child To Parent
public mainform:any;
  constructor() { 
    this.studentsdata=[];//Students Nu Array
  }

  ngOnInit(): void {
  }

  onEdit(items:any)
  {
   this.godata.emit(items);
    //this.mainform.patchValue(items);
    //this.studentsdata.push();//data pacha form ma push kravanu
  }
  

  onDelete(items:any)
  {
    const index=this.studentsdata.indexOf(items);
    this.studentsdata.splice(index,1)
    
  }
}



