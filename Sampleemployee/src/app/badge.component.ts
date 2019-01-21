import { Component, OnInit, Input, DefaultIterableDiffer } from '@angular/core';

@Component({
    selector: 'my-badge',
    template: `
    <button type="button" class="btn btn-primary" (click)="IncrementalCount()">
        {{caption}} <span class="badge badge-light">{{votes}}</span>
    
</button>
 `
})
export class BadgeComponent implements OnInit {

    @Input ('caption') caption: string = 'Default'

    votes : number = 0
    constructor() { }

    ngOnInit() { 

    }
    IncrementalCount()
    {
        console.log('clicked ')
        this.votes++;
    }

}