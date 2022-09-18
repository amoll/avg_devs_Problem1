import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="https://employeeserviceapi20220918143939new.azurewebsites.net/api/Employee/"
  constructor(private http: HttpClient) { }

  getEmployeesCount(id :any) {
    return this.http.get<any>(this.baseUrl+id+"/team/count");
  }
}
