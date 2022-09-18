import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick() {
    const id = localStorage.getItem('id');
    console.log(id);
    this.router.navigateByUrl('/booking/' + id);
  }
  btnClick2() {
    const id = localStorage.getItem('id');
    console.log(id);
    this.router.navigateByUrl('/allocation/' + id);
  }
}
