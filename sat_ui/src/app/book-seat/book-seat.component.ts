import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {
  seatList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.seatList = this.getallocation();
  }

  getallocation() {
    return [
      { id: 1, status: true, desc: "" },
      { id: 2, status: true, desc: "Window" },
      { id: 3, status: true, desc: "" },
      { id: 4, status: true, desc: "near Cafeteria" },
    ]
  }

}
