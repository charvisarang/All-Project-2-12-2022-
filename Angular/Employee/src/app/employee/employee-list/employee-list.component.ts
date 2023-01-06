import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeServiceService } from 'src/app/shared/employee-service.service';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Router } from '@angular/router';
import { DatarefreshService } from 'src/app/shared/datarefresh.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { employee } from '../Model/employee.model';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  id: any;
  employee: any;
  public fullname: any;
  displaystyle = "none";
  public onDeleteId!: number;
  private overlayRef!: OverlayRef;

  // Infinte Scroll
  public pageNumber: number;
  public pageSize: number;
  public distance: number;
  @Output() public cancel: EventEmitter<boolean>;

  constructor(private employeeservice: EmployeeServiceService, private overlay: Overlay, private router: Router, private datarefreshservice: DatarefreshService) {
    this.employee = [];
    this.cancel = new EventEmitter();

    this.pageNumber = 20;
    this.pageSize = 1;
    this.distance = 2;
  }


  ngOnInit(): void {
    this.datarefreshservice.datapresent$.subscribe((response) => {
      console.log(response);
      if (response) {
        this.getEmployeeData();
      }
    });
    this.getEmployeeData();
  }

  // GET DATA 
  getEmployeeData() {
    this.employeeservice.getEmployee(this.pageSize, this.pageNumber,).subscribe((result) => {
      console.log(result);
      this.employee = this.employee.concat(result);
    });
  }
  /***
   * OPENING OVERLAY BOX
   */
  openForm() {
    // Overlay config
    const overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    this.overlayRef = this.overlay.create(overlayConfig);

    // Over Porat;
    const portal = new ComponentPortal(EmployeeFormComponent);
    // porat attched
    const componentRef = this.overlayRef.attach(portal);
    componentRef.instance.cancel.subscribe((res) => {
      console.log(res);
      this.overlayRef.detach();
    });
  }


  // EDIT DATA
  onEdit(items: any) {
    const overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    this.overlayRef = this.overlay.create(overlayConfig);
    // Over Portal;
    const portal = new ComponentPortal(EmployeeFormComponent);
    // portal attched
    const componentRef = this.overlayRef.attach(portal)
    // return componentRef;

    componentRef.instance.employeeform.patchValue(items);//Patching The  Value
    // Canceling the form 
    componentRef.instance.cancel.subscribe((res) => {
      console.log(res);
      this.overlayRef.detach();
    });
  }
  onScroll() {
    this.pageSize++;
    this.getEmployeeData();
  }

  // USING CONFORMATION
  // onDelete(id: number, items: any) {
  //   this.employeeservice.deleteEmployee(id).subscribe((result) => {
  //     console.log(result);
  //     if (confirm("Are you want to sure to delete the data ? " + items.firstname))
  //       this.getEmployeeData();
  //   })
  // }





  // USING POPUP
  onDelete(id: number) {
    this.displaystyle = "block";
    this.onDeleteId = id;
  }

  onClose() {
    this.displaystyle = "none";
  }
  onYes() {
    this.employeeservice.deleteEmployee(this.onDeleteId).subscribe((result) => {
      this.displaystyle = "none";
    });
  }

  onNo() {
    this.displaystyle = "none";
  }
}