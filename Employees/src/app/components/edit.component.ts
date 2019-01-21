import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div class="container">

        <div class="row">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">ID</span>
                </div>
                <input type="text" placeholder="ID" class="form-control"  aria-label="Id" aria-describedby="basic-addon1">
            </div>
        </div>

        <div class="row">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">First Name</span>
                </div>
                <input type="text" #fname (change)="0" class="form-control" placeholder="Employee first name" aria-label="Firstname" aria-describedby="basic-addon1">
            </div>
        </div>

        <div class="row">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Last Name</span>
                </div>
                <input type="text" #lname (change)="0" class="form-control" placeholder="Employee last name" aria-label="lastname" aria-describedby="basic-addon1">
            </div>
        </div>

            <div class="row">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input type="text" #email (change)="0" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                </div>
            </div>

        <div class="row">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Gender</span>
                </div>
                <input type="text" #gender (change)="0" class="form-control" placeholder="Gender" aria-label="Gender" aria-describedby="basic-addon1">
            </div>
        </div>
        <button type="button" class="btn btn-primary">EDIT</button>
        </div>
        `,
    })
    export class EditComponent  {  }