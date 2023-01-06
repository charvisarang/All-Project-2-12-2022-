import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  public myproduct: any
  constructor() { 
    
  }

  buyDell() {
    return true;
  }
  buyHp() {
    return false;
  }


  ngOnInit(): void {
    let laptop = new Promise((resolve, reject) => {
      if (this.buyDell()) {
        setTimeout(() => {
          resolve("Dell is avaiable")
        }, 3000);

      }
      else if (this.buyHp()) {
        setTimeout(() => {
          resolve("Hp is avaiable")
        }, 3000);
      }
      else {
        reject("No Products")
      }
    })
    laptop.then((value) => {
      console.log(value);
      this.myproduct = value;
    })
      .catch((error) => {
        console.log(error);
        this.myproduct=error;
      })

      
  }


}
