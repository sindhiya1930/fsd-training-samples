import { Component ,Input} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'my-card',
  template: `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="http://via.placeholder.com/100x100" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{summary}}</p>
    <my-badge caption="Votes"></my-badge>
  </div>
</div>

  `,
})
export class CardComponent  {
    @Input('title') title:string=" ";
    @Input('summary') summary:string=" ";

 }