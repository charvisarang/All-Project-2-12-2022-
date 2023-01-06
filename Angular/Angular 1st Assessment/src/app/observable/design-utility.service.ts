import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  printVideo(value:any,containerId:any) {
    let element = document.createElement('li');
    element.innerText = value
    document.getElementById(containerId)?.appendChild(element);
}

}
