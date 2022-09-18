import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
baseUrl="https://employeeserviceapi20220917195223.azurewebsites.net/api/employee/1/team/count"
  constructor(private http: HttpClient) { }

  login(username:string, password :string) {
    return this.http.post<any>(this.baseUrl+"/users/authenticate", { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
           // this.currentUserSubject.next(user);
            return user;
        }));
}

getLogin() {
  return this.http.get<any>(this.baseUrl)
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
         // localStorage.setItem('currentUser', JSON.stringify(user));
         // this.currentUserSubject.next(user);
          return user;
      }));
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('currentUser');
 // this.currentUserSubject.next(null);
}

handleError(error: any) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}

function throwError(errorMessage: string) {
  throw new Error('Function not implemented.');
}
