import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements OnInit, AfterViewInit {

  constructor(private design_utility:DesignUtilityService) { }

  @ViewChild('addBtn') addBtn!: ElementRef;
  public data: any;

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe({
      next:(values)=>{
          this.data=('video'+ count++);
          this.design_utility.printVideo(this.data,'video-ID1');
          this.design_utility.printVideo(this.data,'video-ID2');   
      }
    })
  }
}
