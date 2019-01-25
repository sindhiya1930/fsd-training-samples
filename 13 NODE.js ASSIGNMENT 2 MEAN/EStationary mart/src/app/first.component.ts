import { Component ,OnInit,Input} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-first',
  template: `
<div class="container">

    <div class="item active">
      <img src="./images/st3.jpg" alt="Los Angeles" style="width:100%;">
    </div>

</div>
`,
})
export class FirstComponent {

}