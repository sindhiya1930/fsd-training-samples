import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'my-color',
  template: `
  <h2>Display Workouts</h2>
  <ul>
  <li *ngFor="let color of colors;let i=index"> {{color.color}}<button type="button" class="btn btn-danger" (click)="deletecolor(i,color._id)">DELETE</button></li>
  </ul>
        `,
    })
    export class ColorComponent implements OnInit  { 
        colors:Array <Object>=[];
        @Input('id') id:number=0;
constructor(public http:HttpClient){

}
        ngOnInit(){
this.http.get('http://localhost:4000/color')
.toPromise()
.then(res=>{
    console.log(res);

   this.colors=res as any;
})

     }
     
     deletecolor(index:number,id:number){
         
        this.http.delete('http://localhost:4000/colors/'+id)
        .toPromise()
        .then(res=>{
            console.log(res)
            return res
    })
    .then(data=>{console.log(data)})
    this.colors.splice(index,1);
}
    }