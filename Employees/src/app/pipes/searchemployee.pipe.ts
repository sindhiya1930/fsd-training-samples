import {Pipe,PipeTransform} from '@angular/core';
import {Employee} from '../modules/Employee'

@Pipe({
    name:'searchemployee'
})

export class SearchEmployeePipe implements PipeTransform {
    
        transform(employees: Array<Employee>, employeeName?: string) {
            console.log(employees);
            console.log(employeeName);
            if(employeeName)
            {
                let filteredEmployee: Array<Employee> = null;
                filteredEmployee= employees.filter(employee => employee.first_name.startsWith(employeeName) )
                return filteredEmployee;
            }
            return employees;
        }
    
    }