import { Component, Input, OnInit } from '@angular/core';
import { user } from '../usermodel.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  @Input() public userlist: user[];
  public data: any;

  constructor(private userservice: UserserviceService) {
    this.userlist = [];
  }

  ngOnInit(): void {
    this.getDataDetails();
  }
  getDataDetails() {
    this.userservice.getData().subscribe((Response: user[]) => {
      this.data = Response;
    })
  }
  
  // onEdit(){
  //   this.userservice.putData().subscribe((Response))
  // }

  onDelete(id: any) {
    this.userservice.deleteData(id).subscribe((Response) => {
      this.getDataDetails();
    })
  }


}
