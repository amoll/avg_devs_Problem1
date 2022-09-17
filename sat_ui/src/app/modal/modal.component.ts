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
}
