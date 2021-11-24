import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { emp } from '../modals/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  newChange = new BehaviorSubject<emp>(null!);

constructor(private http: HttpClient) { }

FetchData() {
  return this.http.get('http://localhost:3000/users');
}

PostData(formData: any){
  return this.http.post('http://localhost:3000/users', formData)
}

PatchData(formData: any, _id: String) {
  return this.http.patch('http://localhost:3000/users/' + _id, formData);
}

PatchStatus(_id: String, status: boolean) {
  return this.http.patch('http://localhost:3000/users/activation/' + _id, {isActive: !status});
}

}
