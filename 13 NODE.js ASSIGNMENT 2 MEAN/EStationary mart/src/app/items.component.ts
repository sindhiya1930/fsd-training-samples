import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-item',
  
  template: `
  <td><button type="button" class="btn btn-primary" (click)="orderslist(customer_name)">My Orders</button></td>
 
  {{customer_name}}
  <div class="container">
  <div style="width: 50%; float:left">
  <div class="row">
  
      <table class="table ">
      <thead class="thead-light">
      <tr>
          <th scope="col">Item ID</th>
          <th scope="col">Item Name</th>
          <th scope="col">Details</th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let Item of Items;let i=index"  >
  
      <td>{{Item.item_id}}</td>
      <td>{{Item.item_name}}</td>
      <td><button type="button" class="btn btn-primary" (click)="details(Item.item_id)">View</button></td>
      </tr>
      </tbody>
      </table>
</div>
</div>

<div style="width: 50%; float:right">
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">SELECT THE QUANTITY OF ITEMS NEEDED</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: {{description_id}}</li>
  <li class="list-group-item">NAME: {{description_name}}</li>
  <li class="list-group-item">PRICE: Rs.{{description_price}}</li>
  <li class="list-group-item"><input type="number" #quantity id="quantity" value="1"  class="form-control" placeholder="Quantity" ></li>
</ul>
<div class="card-body">
<button type="button" class="btn btn-primary" (click)="add(customer_name,date,description_name,description_price,quantity.value)">Add-to-cart</button>
<button type="button" class="btn btn-primary" (click)="view(customer_name,date)">View-Cart</button>

</div>
</div>
<button type="button" class="btn" (click)="order(customer_name,date)">Order</button>
<div>
<div class="row">

    <table class="table ">
    <thead class="thead-light">
    <tr>
        <th scope="col">Item Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col">Delete</th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let Cart of Carts;let i=index"  >

    <td>{{Cart.item_name}}</td>
    <td>{{Cart.Quantity}}</td>
    <td>{{Cart.price}}</td>
    <td><button type="button" class="btn btn-danger" (click)="deleteitem(i,Cart.item_name)">Delete</button></td>
    </tr>
    </tbody>
    </table>
</div>
<h4>Total Items: {{number_of_items}}</h4>
<h4>Total Price: {{Total_price}}</h4>
</div>
</div>

</div>


`
  ,
})

export class ItemComponent {
@Input('quantity') quantity:number=1;
  Items:Array <Object>=[];
  Carts:Array <Object>=[];
  mess:string='';
  description_id:number;
  description_name:string='';
  description_price:number;
  customer_name:string='';
  date:number=1;
  number_of_items:number=0;
  Total_price:number;

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
  
 details(item_id:number){
    
   this.http.get('http://localhost:8001/item/'+item_id)
   .toPromise()
   .then(res=>{
       console.log(res[0].item_id)
       console.log(res[0].item_name)
       this.description_id=res[0].item_id;
       this.description_name=res[0].item_name;
       this.description_price=res[0].price;
       return res
  })
  }
  add(customer_name:string,date:number,description_name:string,description_price:number,quantity:number){
    this.http.post('http://localhost:8001/addtocart',
    {name:customer_name,date:date,item_name:description_name,price:description_price,quantity:quantity})
    .toPromise()
    .then(res=>{
        console.log(res)
        return res
 })
  }
  view(customer_name:string,date:number){
 this.http.get('http://localhost:8001/cartitems/'+customer_name)
 .toPromise()
 .then(res=>{
 console.log(res);
 
 this.Carts=res as any;
 })

 this.http.get('http://localhost:8001/count/'+customer_name+'/'+date)
 .toPromise()
 .then(res=>{
     console.log(res)
     console.log(res[0].Total_Price)
     this.number_of_items=res[0].number_of_items;
     this.Total_price=res[0].Total_Price
     return res
     
 })

  }

  order(customer_name:string,date:number){
    console.log(customer_name+""+date)
    var request="requested";
    const order_id = Math.floor(Math.random() * (999 - 100)) + 100;
    console.log(order_id)
this.http.post('http://localhost:8001/order/',
{order_id:order_id,name:customer_name,date:date,request:request})
.toPromise()
.then(res=>{
    console.log(res)
    if(res['code']==403)
    {
     this.mess=res['failure']
 }
    return res
})

this.http.post('http://localhost:8001/neworders/',
{order_id:order_id})
.toPromise()
.then(res=>{
    console.log(res)
    /*if(res.code==403)
    {
     this.mess=res.failure
 }
 else{*/
  this.router.navigate(['Order/'+customer_name+'/'+order_id+'/'+date]);
    return res
})
    this.date=this.date+1;

}

orderslist(customer_name:string){
this.router.navigate(['Myorders/'+customer_name]);}

deleteitem(index:number,item_name:string){
    
   this.http.delete('http://localhost:8001/deleteitem/'+item_name)
   .toPromise()
   .then(res=>{
       console.log(res)
       return res
 })
 .then(data=>{console.log(data)})
 this.Carts.splice(index,1);
 }

   
}
