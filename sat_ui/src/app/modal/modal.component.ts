import { Component, OnInit,Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

// const today = new Date();
// const month = today.getMonth();
// const year = today.getFullYear();
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  toDate:Date=new Date();
  fromDate:Date=new Date();
  constructor() { }
  @Input() item :any= null; // decorate the property with @Input()
  ngOnInit(): void {
  }
  // campaignOne = new FormGroup({
  //   start: new FormControl(new Date(year, month, 13)),
  //   end: new FormControl(new Date(year, month, 16)),
  // });
  // campaignTwo = new FormGroup({
  //   start: new FormControl(new Date(year, month, 15)),
  //   end: new FormControl(new Date(year, month, 19)),
  // });
  checkSeatAvalibility()
  {
    debugger
    console.log(this.fromDate )
    console.log(this.toDate )
    var now = new Date();
var daysOfYear = [];
for (var d = new Date(this.fromDate); d <= new Date(this.toDate ); d.setDate(d.getDate() + 1)) {
  console.log(d);
}
  }
}
