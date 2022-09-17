import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  // loading = false;
  // submitted = false;
  returnUrl: string="";
  userName: string="";
  pwd:string="";

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
      //private alertService: AlertService
  ) {
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) {
      //     this.router.navigate(['/']);
      // }
  }

  ngOnInit() {
      // this.loginForm = this.formBuilder.group({
      //     username: ['', Validators.required],
      //     password: ['', Validators.required]
      // });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  //get f() { return this.loginForm.controls; }

  onSubmit() {
    
    //  console.log(this.userName +" "+ this.pwd)
    //   this.authenticationService.login(this.userName, this.pwd)
    //       .subscribe(
    //           data => {
    //             if(data.role=="Viewer")
    //             {
    //                 this.router.navigate(['/booking', { id: data.empId }]);
    //             }
    //             else{
    //                 this.router.navigate(['/dashboard',{ id: data.empId }]);
    //             }
                 
    //           },
    //           error => {
    //               //this.alertService.error(error);
    //              // this.loading = false;
    //           });

              this.authenticationService.getLogin().subscribe(
                data => {
                    debugger;
                    console.log(data)
                //   if(data.role=="Viewer")
                //   {
                //       this.router.navigate(['/booking', { id: data.empId }]);
                //   }
                //   else{
                //       this.router.navigate(['/dashboard',{ id: data.empId }]);
                //   }
                   
                },
                error => {
                    //this.alertService.error(error);
                   // this.loading = false;
                });
  }

  
}
