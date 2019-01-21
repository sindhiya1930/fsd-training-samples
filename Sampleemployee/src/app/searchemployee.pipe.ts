import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Employee';

@Pipe({
    name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

    transform(employees : Array<Employee>, firstname?: string) {

        console.log(employees);
        console.log(firstname);
        if(firstname)
        {
            let filteredEmployee: Array<Employee> = null;
            filteredEmployee= employees.filter(employee => employee.first_name.startsWith(firstname) )
            return filteredEmployee;
        }
        return employees;
        
    }

}

