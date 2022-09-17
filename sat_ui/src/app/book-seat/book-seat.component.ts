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
      { id: 5, status: false, desc: "" },
      { id: 6, status: true, desc: "Window" },
      { id:7, status: true, desc: "" },
      { id: 8, status: true, desc: "near Cafeteria" },
      { id: 9, status: true, desc: "" },
      { id: 10, status: true, desc: "Window" },
      { id: 11, status: false, desc: "" },
      { id: 12, status: true, desc: "Window" },
      { id: 13, status: false, desc: "" },
      { id: 14, status: true, desc: "near Cafeteria" },
      { id: 15, status: true, desc: "" },
      { id: 16, status: true, desc: "Window" },
      { id:17, status: true, desc: "" },
      { id: 18, status: true, desc: "near Cafeteria" },
      { id: 19, status: true, desc: "" },
      { id: 20, status: true, desc: "Window" },
      { id: 21, status: true, desc: "" },
      { id: 22, status: true, desc: "Window" },
      { id: 23, status: true, desc: "" },
      { id: 24, status: true, desc: "near Cafeteria" },
      { id: 25, status: true, desc: "" },
      { id: 26, status: true, desc: "Window" },
      { id:27, status: true, desc: "" },
      { id: 28, status: true, desc: "near Cafeteria" },
      { id: 29, status: true, desc: "" },
      { id: 30, status: true, desc: "Window" },
    ]
  }

}
