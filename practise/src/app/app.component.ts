import { Component,OnInit } from '@angular/core';
import {Course} from './Course';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'my-app',
  template: `
  {{title | capitalise}}
  <my-badge caption="votes"></my-badge>
  <my-badge caption="Inbox" count=0></my-badge>
  <br><br>
  <hr>
  <div class="container">
      <div class="row">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Search the Courses</span>
            </div>
            <input type="text" #search (keyup)="0" class="form-control" placeholder="Course name" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="row">
          <my-card *ngFor="let course of courses|searchCourse:search.value" title={{course.title}} summary={{course.summary}}></my-card>
      </div>
  </div>
  `,
})
export class AppComponent implements OnInit { 
title:string='fAnTastic HElp';
  constructor(public http:HttpClient)
  {

  }

  ngOnInit()
  {
    this.http.get('http://localhost:3000/assets/courses.json')
    .toPromise()
    .then(res=>{
      console.log(res);
      this.courses=res as any;
    })
  }

  courses: Array<Course>=[];
  
}
