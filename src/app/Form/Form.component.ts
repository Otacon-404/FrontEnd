import { EmployeesService } from './../Services/Employees.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css'],
})
export class FormComponent implements OnInit {
  formData?: any
  newEmployee!: FormGroup;
  constructor(private fb: FormBuilder, private employees: EmployeesService) {}

  ngOnInit() {
    this.newEmployee = this.fb.group({
      firstName: [null],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      isMale: [null, Validators.required],
      salary: ['', Validators.required],
      isActive: [null, Validators.required],
    });
  }
  onSubmit(form: FormGroup) {
    // for showing purposes
    this.employees.PostData(form.value).subscribe(
      () => {
        console.log("success")
      },
      (error) => {
        console.log(error)
      }
    );
    this.employees.newChange.next(form.value);
     this.newEmployee.reset();
  }

}

