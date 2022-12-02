import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  // @ViewChild('result') result!: ElementRef<HTMLDataElement>; 
  constructor() {

  }


  ngOnInit(): void {







    // 1)================================================= aysnc always return Promise
    // async function getData() {
    //   let response = await Promise;
    //   console.log(response);
    //   return 'hello'
    // }
    // getData().then(value => { console.log(value) })//output--hello



    //  2)=================================================Promise
    // let mypromise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('heiiiii')
    //   }, 3000)
    // })
    // mypromise.then(value => { console.log(value) }) //ouput-heiiiiiii
    //=======================================================Ex-01 With Promise

//Ex-01================================================================
// let ans=document.getElementById('data-id1')
// function data(){
//   ans.innerText="This is a  DATA"
//   console.log('This is data of button')
// }
// data();
  }


}


