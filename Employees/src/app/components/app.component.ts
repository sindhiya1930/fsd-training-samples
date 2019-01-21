import { Component ,OnInit,Input} from '@angular/core';
import {Employee} from '../modules/Employee'
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { EditComponent} from './edit.component';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',

})
export class AppComponent { 
  messages:Array<string>=[];
  @Input('id') id:number=0;
  @Input('key') key:number=0;
  constructor(public http:HttpClient,public employeeService:EmployeeService)
  {

  }
  addEmployee(id:number,fname:string,lname:string,email:string,gender:string){

    this.employeeService.addEmployee(id,fname,lname,email,gender)
        .then(res=>{
          console.log(res);
          this.employees=res as any;
        })
      }

  deleteEmployee(key:number){
    this.employeeService.deleteEmployee(key)
        .then(res=>{
          console.log(res);
          this.employees=res as any;
        })
      }
  


  ngOnInit()
  {
  this.employeeService.fetchEmployee()
      .then(res=>{
        console.log(res);
        this.employees=res as any;
      })
    }

  employees: Array<Employee>=[];
 }
