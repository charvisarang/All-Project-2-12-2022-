import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public loginform:FormGroup;
  public isSubmitted: boolean = false;

  constructor(public formBuilder: FormBuilder) {
    this.loginform = new FormGroup('');
  }
  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      firstname: ['', Validators.required, Validators.minLength(8)],
      middlename: ['', Validators.required, Validators.minLength(8)],
      lastname: ['',Validators.required, Validators.minLength(8)],
      age: ['', Validators.required],

      email: ['', Validators.required, Validators.pattern("^[aa-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")],
      password: ['', Validators.required,Validators.pattern("^[@]+[0-9a-zA-z]")],
      mobilenumber: ['', Validators.required, Validators.pattern("[0-9]{10}")],
      address:this.formBuilder.group({
        city:['',Validators.required],
        state:['',Validators.required],
        zipcode:['',Validators.required]

      })
    })

  }




  onSubmit() {
    this.isSubmitted = true;
    console.log(this.loginform);
  }

}
