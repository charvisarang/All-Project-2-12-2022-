import { employee } from "../Model/employee.model";


export class EmployeeAdapter {

    public toConcat(item: any) {
        const employeelist: employee = new employee();
        employeelist.id = item.id;
        employeelist.firstname = item.firstname;
        employeelist.lastname = item.lastname;
        employeelist.email = item.email;
        employeelist.mobileno = item.mobileno;
        employeelist.salary = item.salary;
        employeelist.selectcountry = item.selectcountry;
        employeelist.selectstate = item.selectstate;
        employeelist.selectcity = item.selectcity;
        employeelist.fullname = item.firstname.concat(" " + item.lastname);
        return employeelist;
    }
} 