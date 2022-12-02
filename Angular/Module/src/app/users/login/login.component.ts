import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['p{color:yellow;font-size:20px;padding:5px;background-color:black;text-align:center}']
})
export class LoginComponent implements OnInit {

public formdata:any;
public mainform:FormGroup ;     //mainform ne declare kairu
public isSubmitted:boolean=false; // submit kre tyare

  constructor(public fb:FormBuilder) 
  { 
    this.mainform=new FormGroup('');// mainform ne formgroup aakhu banavu 
    this.formdata=[];
  }

  ngOnInit(): void {
    this.mainform=this.fb.group({
    firstname:['',[Validators.required,Validators.pattern("a-zA-Z ]*")]],
    gender:['',[Validators.required,Validators.pattern("a-zA-Z ]*")]]
    })
  }

  //Edit function list nu reh pan patach value karava mate form ma lakhu pade
  onEdit(items:any){
    this.mainform.patchValue(items);
  }
  onAdd(){
    this.isSubmitted=true;
    console.log(this.mainform.value);
    this.formdata.push(this.mainform.value) //form na data aiy thi data pass/push kre table
  }
  onReset()
  {
    this.mainform.reset();
  }
}
