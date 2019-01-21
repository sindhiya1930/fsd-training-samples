import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService{

constructor(public http:HttpClient) {
}

baseUrl:string="http://localhost:5000";

addEmployee(id:number,fname:string,lname:string,email:string,gender:string):Promise <any>{
    return this.http.post(this.baseUrl+'/courses',{
    id:id,first_name:fname,last_name:lname,gender:gender,email:email
  }
  )
    .toPromise()
    }
  

  deleteEmployee(key:number):Promise <any>{
   return  this.http.delete(this.baseUrl+'/courses/'+key,{
    
  }
 
  )
    .toPromise()
  }

  fetchEmployee():Promise <any> {
    return   this.http.get(this.baseUrl+'/courses')
        .toPromise()

  }

}