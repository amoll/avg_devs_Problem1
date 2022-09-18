import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string = "";
  userName: string = "";
  pwd: string = "";
  login: Array<any> = [
    {
      "id": 1,
      "username": "Anthony",
      "password": "12345",
      "role": "Manager"
    },
    {
      "id": 2,
      "username": "Tony",
      "password": "12345",
      "role": "Admin"
    },
    {
      "id": 3,
      "username": "Ben",
      "password": "12345",
      "role": "Viewer"
    },
    {
      "id": 4,
      "username": "Sebastian",
      "password": "12345",
      "role": "Viewer"
    }
  ]


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const user = this.login.find((a: any) => {
      return a.username === this.userName && a.password === this.pwd
    })
    if (user) {
      // alert("Login Success");
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('id', JSON.stringify(user.id));
      if (user.role == "Viewer") {
        this.router.navigate(['/booking/', user.id]);
      }
      else {
        this.router.navigate(['/dashboard/', user.id]);
      }

    } else {
      alert("Username or Password incorrect");
    }


  }


}
