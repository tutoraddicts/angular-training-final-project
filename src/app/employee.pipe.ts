import {Pipe, PipeTransform} from '@angular/core';


@Pipe ({
    name : 'employeePipe'
}) 

export class EmployeePipe implements PipeTransform {
    transform ( name : String, gender : String) : String {
        if (gender.toLowerCase() == 'male') {
            return 'Mr.' + name;
        }
        else {
            return 'Mrs.' + name;
        }
    }
}