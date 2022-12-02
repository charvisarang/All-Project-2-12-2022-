import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private design_utility: DesignUtilityService) { }

  ngOnInit(): void {
    // OF
    const names1 = of('Anup', 'Shekar', 'Sharma');
    names1.subscribe(res =>{console.log(res);
      this.design_utility.printVideo(res, 'Video-ID')
    });

    // FROM
    const names2 = from(['From1', 'Form2', 'From3']);
    names2.subscribe(res => {
      console.log(res);
      this.design_utility.printVideo(res, 'Video-ID2')
    });


    // PROMISE
    const mypromise = new Promise(resolve => {
      resolve('This is Promise');
    });
    mypromise.then(value => { console.log(value) });

    const names3 = from(mypromise);
    names3.subscribe(res => {
      console.log(res);
      this.design_utility.printVideo(res, 'Video-ID3');
    })

    // String
    const names4= from('Welcome to 1Rivet')
    names4.subscribe(res=>{console.log(res);
    this.design_utility.printVideo(res,'Video-ID4')
    })
  }
}
