import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'my-cardview',
    template: `<div class="card" style="width: 18rem;">
    <img class="card-img-top" 
    src="http://via.placeholder.com/100x100" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{summary}}</p>
<my-badge caption = "vote"></my-badge> <br>
  </div>
</div>`
})
export class CardComponent implements OnInit {

    @Input ('title') title: string = 'Default 1'

    @Input ('summary') summary: string = 'Default'

    constructor() { }

    ngOnInit() { 


    }

}