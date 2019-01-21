import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { Employee } from './Employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'employee';
  now = new Date();

  constructor(public http: HttpClient) {}


addEmployee(id : number,first_name : string,last_name: string,email : string, gender : string)
{
  this.http.post('http://localhost:3000/employee',{
  id : id,  
  first_name : first_name,
  last_name : last_name,
  email : email,
  gender : gender

  } )
    .toPromise()
    .then(data=>{
      console.log(data);
      this.employees= data as any;
    })
}
  ngOnInit() { 

    this.http.get('http://localhost:4200/assets/courses.json')
    .toPromise()
    .then(data=>{
      console.log(data);
      this.courses= data as any;
    })

    this.http.get('http://localhost:3000/employee')
    .toPromise()
    .then(data=>{
      console.log(data);
      this.employees= data as any;
    })
        
    }

  courses : Array<Course>=  [  ];

  employees : Array<Employee>=  [  ];

}
