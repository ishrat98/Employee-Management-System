import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../create-employee/IEmployee';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: IEmployee[];

  // tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService,
    // tslint:disable-next-line: variable-name
              private _router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      (employeeList) => this.employees = employeeList,
      (err) => console.log(err)
    );
  }

  editButtonClick(employeeId: number) {
    this._router.navigate(['/employees/edit', employeeId]);
  }
}
