import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() public data: any;
  @Output() newchanges = new EventEmitter();

  constructor() {
    this.data = [];
  }
  onEdit(items: any) {
    this.newchanges.emit(items);
  }
  ngOnInit(): void {
  }
}
