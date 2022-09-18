import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  baseUrl = "https://allocationserviceapi20220918143349new.azurewebsites.net/api/allocations/locations"
  constructor(private http: HttpClient) { }
  getLoacations() {
    return this.http.get<any>(this.baseUrl);
  }
  getDetailsByLocationID(id: any) {
    return this.http.get<any>(this.baseUrl + "/" + id);
  }

  bookAllocation(book: any): Observable<any> {
    const url = "https://allocationserviceapi20220918143349new.azurewebsites.net/api/Allocations"
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(book);
    return this.http.post(url, body, { 'headers': headers });
  }

  getLocationByEmployeeID(id: any, empId: any) {
    const url = "https://allocationserviceapi20220918143349new.azurewebsites.net/api/allocations/locations/";
    return this.http.get<any>(url + id + "/employee/" + empId);
  }

}
