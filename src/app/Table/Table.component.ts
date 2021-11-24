import { EmployeesService } from './../Services/Employees.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Table',
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.css'],
})
export class TableComponent implements OnInit {
  Employees?: Array<any>
  newData:any
  searchText: any
  editedEmployee!: FormGroup;
  constructor(private employees:EmployeesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.employees.newChange.subscribe((res) => {this.Employees?.push(res)})
    this.employees.FetchData().subscribe(
      (data: any) => {this.Employees = data},
      (e) => {console.log(e)});
    //this.Employees = this.employees.Employees
    this.editedEmployee = this.fb.group({
      firstName: [''],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      isMale: [null, Validators.required],
      salary: ['', Validators.required],
      isActive: [null, Validators.required],
    });
  }

  onclick(data:any){
    this.newData = data;
  }

  changeStatus(id: String, status: boolean){
    this.employees.PatchStatus(id, status).subscribe(
      (user) => {
        this.employees.FetchData().subscribe(
          (data: any) => {this.Employees = data},
          (e) => {console.log(e)});
      },
      (e) => {console.log(e)}
    )
  }

  onSubmit(form: FormGroup) {
    this.employees.PatchData(form.value, this.newData._id).subscribe(
      () => {
        this.employees.FetchData().subscribe(
          (data: any) => {this.Employees = data},
          (e) => {console.log(e)});
      },
      (e) => {console.log(e)}
    )
  }
}
