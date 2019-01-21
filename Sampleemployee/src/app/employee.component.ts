import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'my-employee',
    template: `
    <table class="table table-bordered">
    <tbody>
    <tr>
      <td>{{id}}</td>
      <td>{{first_name}}</td>
      <td>{{last_name}}</td>
      <td>{{email}}</td>
      <button type="button" class="btn btn-danger">Delete {{key}}</button>
    </tr>
  </tbody>
</table>
`
})
export class EmployeeComponent implements OnInit {

    @Input ('id') id: number = 0

    @Input ('first_name') first_name: string = 'Default'

    @Input ('last_name') last_name: string = 'Default'

    @Input ('email') email: string = 'Default'

    @Input ('gender') gender: string = 'Default'

    @Input ('key') key: number;

    constructor() { }

    ngOnInit() { 

    }

}
