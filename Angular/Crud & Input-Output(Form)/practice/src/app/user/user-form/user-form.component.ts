import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public data1: any = [];
  public userForm: any;
  public isSubmitted: boolean = true;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSub() {
    this.isSubmitted = true;
    if (this.userForm.valid) {
      this.data1.push(this.userForm.value);
    }
  }
  onEdit(items: any) {
    this.userForm.patchValue(items);
  }
}
