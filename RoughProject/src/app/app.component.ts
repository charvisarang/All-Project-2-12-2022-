import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyProject';
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      phone: ['']
    })
  }
}
