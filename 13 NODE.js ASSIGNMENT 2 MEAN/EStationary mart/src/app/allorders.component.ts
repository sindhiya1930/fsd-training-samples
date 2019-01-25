import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-allorders',
  template: `  
  <td><button type="button" class="btn btn-primary" (click)="goback()">Back to items</button></td><div class="row">
  <div class="container">

  <div class="row">
  
      <table class="table ">
      <thead class="thead-light">
      <tr>
          <th scope="col">Order ID</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total Price</th>
          <th scope="col">Approve</th>
          <th scope="col">Cancel</th>
          <th scope="col">Remarks</th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let Order of Orders;let i=index"  >
  
      <td>{{Order.order_id}}</td>
      <td>{{Order.name}}</td>
      <td>{{Order.number_of_items}}</td>
      <td>{{Order.Total_price}}</td>
      <td><button type="button" class="btn btn-danger" (click)="approve(Order.order_id,approved)">Approve</button></td>
      <td><button type="button" class="btn btn-danger" (click)="approve(Order.order_id,cancelled)">Cancel</button></td>
      <td>{{message}}</td>
      </tr>
      </tbody>
      </table>
</div>
</div>`
  ,
})

export class AllordersComponent {
    Orders:Array <Object>=[];
  mess:string='';
  customer_name:string='';
  order_id:number=0;
 approved:string="Approved"
 cancelled:string="Cancelled"
 message:string='';
  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router){
        this.customer_name = route.snapshot.params['name'];
  }
  
  ngOnInit(){
    this.http.get('http://localhost:8001/allorders')
    .toPromise()
    .then(res=>{
    console.log(res);
    
    this.Orders=res as any;
    })
  }
  goback(){
    
        this.router.navigate(['Admin/'+this.customer_name]);
         
     }

     approve(order_id:number,mess:string){
        this.http.put('http://localhost:8001/editrequest',
        {order_id:order_id,request:mess})
        .toPromise()
        .then(res=>{
            console.log(res)
            if(res['request']=="Approved")
{
    this.message=order_id+" is Approved"
}
else{
    this.message=order_id+"is Cancelled"
}
            return res
     })
     }

}
