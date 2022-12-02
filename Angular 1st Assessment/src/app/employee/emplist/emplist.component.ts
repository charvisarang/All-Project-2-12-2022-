import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/usermodel';
import { EmpserviceService } from '../service/empservice.service';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {
  @Input() employeelist: Employee[];
  @Output() newchanges = new EventEmitter();

  constructor(private actrouter: ActivatedRoute, private routers: Router, private service: EmpserviceService) {
    this.employeelist = [];
  }

  ngOnInit(): void {
    this.getDataDetails()
  }

  onShowDetails(items: any) {
    this.routers.navigate(['employee/empdetails'], { queryParams: items });
  }

  // GET METHOD
  getDataDetails() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.employeelist = response;
    })
  }
  //DELETE METHOD
  onDelete(id: any) {
    this.service.deleteData(id).subscribe((response) => {
      //console.log(response);
      this.getDataDetails();
    })
  }

  // EDIT METHOD
  onEdit(items: any) {
    this.newchanges.emit(items);
    this.routers.navigate(['employee/edit/' + items.id]);
  }
}
  // onDelete(id?: number) {
  // const index = this.employeelist.indexOf(items);
  // this.employeelist.splice(index, 1);
  // }


