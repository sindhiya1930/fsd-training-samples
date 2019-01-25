import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-admin',
  template: `  
  <div class="container">
  <td><button type="button" class="btn btn-primary" (click)="allorders()">All Orders</button></td>
  <div class="row">
  
      <table class="table ">
      <thead class="thead-light">
      <tr>
          <th scope="col">Item ID</th>
          <th scope="col">Item Name</th>
          <th scope="col">Price</th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let Item of Items;let i=index"  >
  
      <td>{{Item.item_id}}</td>
      <td>{{Item.item_name}}</td>
      <td>{{Item.price}}</td>
      </tr>
      </tbody>
      </table>
</div>
</div>`
  ,
})

export class AdminComponent {
  Items:Array <Object>=[];
  customer_name:string='';
  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router){
      this.customer_name = route.snapshot.params['name'];
  
  }
  
  ngOnInit(){
    this.http.get('http://localhost:8001/items')
    .toPromise()
    .then(res=>{
    console.log(res);
    
    this.Items=res as any;
    })
  }
  allorders(){
    this.router.navigate(['Allorders/'+this.customer_name]);
  }

}
