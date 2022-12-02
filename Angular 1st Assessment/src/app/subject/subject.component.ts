import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const sub=new Subject();
    sub.subscribe({
      next:(value)=>console.log(value)
    });
    sub.subscribe({
      complete:()=>console.log()//stop
    });
    sub.subscribe({
      error:(value)=>console.log(value)//display error
    });

    sub.next(1);
    sub.next(2);
  }

}
