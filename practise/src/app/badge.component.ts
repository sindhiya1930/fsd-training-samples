import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-badge',
  template: `<button type="button" class="btn btn-primary" (click)="incrementCount()">
  {{caption}} <span class="badge badge-light">{{count}}</span>
</button>`,
})
export class BadgeComponent  { 

    @Input('caption') caption:string='Default'
    @Input('count')count:number=0

    incrementCount()
    {
        console.log("click event fired...");
        this.count++;
    }
 }
