import { AfterViewInit, Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit ,AfterViewInit{
  msg: any
  public videoSub: Subscription = new Subscription;
  constructor(private design_utility: DesignUtilityService) {

  }

  ngOnInit(): void {
    // let count = 1;
    // const text = interval(1000);
    // //this.videoSub = text.subscribe(res => {
    // //   console.log(res);
    // this.videoSub = text.subscribe({
    //   next: (values) => {
    //     this.msg = 'VideoShow ' + count++;
    //     this.design_utility.printVideo(this.msg, 'Video-ID')
    //     if (values >= 5) {
    //       this.videoSub.unsubscribe();
    //     }
    //   }
    // })

  }


  ngAfterViewInit(): void {
    let count = 1;
    const text = interval(1000);
    this.videoSub = text.subscribe({
      next: (values) => {
        this.msg = ('video' + count++);
        this.design_utility.printVideo(this.msg, 'video-ID1');
        if (values >= 5) {
          this.videoSub.unsubscribe();
        }
      }
    })
  }
}

