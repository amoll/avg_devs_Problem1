import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  allocationList: any=[]
  constructor() { }

  ngOnInit(): void {
    this.allocationList=this.GetLollocationData();
  }
  GetLollocationData()
  {
    return [
      {EmpName :"ABC PQL", EMPID:"1",zone:"A",isAlocated:true,seatNumber:1},
      {EmpName :"ABC1 PQL1", EMPID:"1",zone:"A",isAlocated:true,seatNumber:2},
      {EmpName :"ABC3 PQL3", EMPID:"3",zone:"A",isAlocated:true,seatNumber:3},
      {EmpName :"ABC PQL4", EMPID:"4",zone:"A",isAlocated:true,seatNumber:4},
      {EmpName :"ABC PQL5", EMPID:"5",zone:"A",isAlocated:true,seatNumber:5},
      {EmpName :"ABC PQL6", EMPID:"6",zone:"A",isAlocated:true,seatNumber:6},
      {EmpName :"ABC1 PQL7", EMPID:"7",zone:"A",isAlocated:true,seatNumber:7},
      {EmpName :"ABC1 PQL8", EMPID:"8",zone:"A",isAlocated:true,seatNumber:8},
      {EmpName :"ABC3 PQL9", EMPID:"9",zone:"A",isAlocated:true,seatNumber:9},
      {EmpName :"ABC PQL10", EMPID:"10",zone:"A",isAlocated:true,seatNumber:10},
      {EmpName :"ABC PQL", EMPID:"11",zone:"A",isAlocated:true,seatNumber:11},
      {EmpName :"ABC1 PQL12", EMPID:"12",zone:"A",isAlocated:true,seatNumber:12},
      {EmpName :"ABC3 PQL13", EMPID:"13",zone:"A",isAlocated:true,seatNumber:13},
      {EmpName :"ABC PQL14", EMPID:"14",zone:"A",isAlocated:true,seatNumber:14},
      {EmpName :"ABC PQL15", EMPID:"15",zone:"A",isAlocated:true,seatNumber:15},
      {EmpName :"ABC PQL16", EMPID:"16",zone:"A",isAlocated:true,seatNumber:16},
      {EmpName :"ABC1 PQL17", EMPID:"17",zone:"A",isAlocated:true,seatNumber:17},
      {EmpName :"ABC1 PQL18", EMPID:"18",zone:"A",isAlocated:true,seatNumber:18},
      {EmpName :"ABC3 PQL19", EMPID:"19",zone:"A",isAlocated:true,seatNumber:19},
      {EmpName :"ABC PQL20", EMPID:"20",zone:"A",isAlocated:true,seatNumber:20},
      {EmpName :"ABC PQL", EMPID:"1",zone:"B",isAlocated:true,seatNumber:1},
      {EmpName :"ABC1 PQL1", EMPID:"1",zone:"B",isAlocated:true,seatNumber:2},
      {EmpName :"ABC3 PQL3", EMPID:"3",zone:"B",isAlocated:true,seatNumber:3},
      {EmpName :"ABC PQL4", EMPID:"4",zone:"B",isAlocated:true,seatNumber:4},
      {EmpName :"ABC PQL5", EMPID:"5",zone:"B",isAlocated:true,seatNumber:5},
      {EmpName :"ABC PQL6", EMPID:"6",zone:"B",isAlocated:true,seatNumber:6},
      {EmpName :"ABC1 PQL7", EMPID:"7",zone:"B",isAlocated:true,seatNumber:7},
      {EmpName :"ABC1 PQL8", EMPID:"8",zone:"B",isAlocated:true,seatNumber:8},
      {EmpName :"ABC3 PQL9", EMPID:"9",zone:"B",isAlocated:true,seatNumber:9},
      {EmpName :"ABC PQL10", EMPID:"10",zone:"B",isAlocated:true,seatNumber:10},
      {EmpName :"ABC PQL", EMPID:"11",zone:"B",isAlocated:true,seatNumber:11},
      {EmpName :"ABC1 PQL12", EMPID:"12",zone:"B",isAlocated:true,seatNumber:12},
      {EmpName :"ABC3 PQL13", EMPID:"13",zone:"B",isAlocated:true,seatNumber:13},
      {EmpName :"ABC PQL14", EMPID:"14",zone:"B",isAlocated:true,seatNumber:14},
      {EmpName :"ABC PQL15", EMPID:"15",zone:"B",isAlocated:true,seatNumber:15},
      {EmpName :"ABC PQL16", EMPID:"16",zone:"B",isAlocated:true,seatNumber:16},
      {EmpName :"ABC1 PQL17", EMPID:"17",zone:"B",isAlocated:true,seatNumber:17},
      {EmpName :"ABC1 PQL18", EMPID:"18",zone:"B",isAlocated:true,seatNumber:18},
      {EmpName :"ABC3 PQL19", EMPID:"19",zone:"B",isAlocated:true,seatNumber:19},
      {EmpName :"ABC PQL20", EMPID:"20",zone:"B",isAlocated:true,seatNumber:20}
    ]
  }

}
