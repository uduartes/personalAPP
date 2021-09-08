import { Directive } from '@angular/core';

@Directive({
  selector: '[appHigthLight]',
  host:{
    style:'displey:none'
  }
})
export class HigthLightDirective {

  constructor() { 
    
  }

}
