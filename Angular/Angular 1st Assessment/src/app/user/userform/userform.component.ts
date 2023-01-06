import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../usermodel.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  
  public data: user[];
  // Form details
  public mainform: FormGroup;
  public isSubmitted: boolean = false;


  constructor(public fb: FormBuilder, private userservice: UserserviceService) {
    
    this.mainform = new FormGroup('');
    this.data=[];//New variable of service
   
  }

  ngOnInit(): void {
    this.mainform = this.fb.group({
      firstname: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    })
   // this.getDataDetails();
  }
  onSubmit() {
      this.isSubmitted = true;
    this.userservice.postData(this.mainform.value).subscribe((Response)=>{
    //this.getDataDetails();
    console.log(Response);
  })
    // this.getDataDetails();
  }
  // Get Function
  // getDataDetails() {
  //   this.userservice.getData().subscribe((Response:user[]) => {
  //     this.data = Response;
  //   })
  // }
  getDataDetails(){
    this.userservice.getData().subscribe((response)=>{
     
      console.log(response);
    })
  }
}
