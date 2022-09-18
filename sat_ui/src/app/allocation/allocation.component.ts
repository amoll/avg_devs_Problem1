import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../service/allocation.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  selectedLocation:any="1";
  selectedFloor:any;
  selectedZone:any;
  allocationList: any=[];
  locations:any=[];
  floors:any=[];
  zones:any=[];
  employeeCount:any;
  constructor(private lacationService: AllocationService, private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.locations=this.getLocations();
    this.floors=this.getFloors();
    this.allocationList=this.zones;
  }

  getLocations()
  {
    this.lacationService.getLoacations().subscribe((data)=>{
      this.locations = data;
    });
  }
  getFloors()
  {
    this.lacationService.getDetailsByLocationID(this.selectedLocation).subscribe((data)=>{
      this.floors = data.floors;
    });
  }
  onChangeFloor(event:any)
  {
    debugger
   var floorid= event.target.value;
   for (var i = 0; i < this.floors.length; i++) {
    if(this.floors[i].id==floorid)
     this.zones=this.floors[i].zones;
   }
  }

  onChangeEmployee(event:any)
  {
    debugger
   var employeeId= event.target.value;
   this.employeeService.getEmployeesCount(employeeId).subscribe((data)=>{
    debugger
    this.employeeCount = data;
  });
  //  for (var i = 0; i < this.floors.length; i++) {
  //   if(this.floors[i].id==floorid)
  //    this.zones=this.floors[i].zones;
  //  }
  }
  // GetLollocationData()
  // {
  //   return [
  //     {zone:"A",seats:[
  //     {EmpName :"ABC PQL", EMPID:"1",zone:"A",isAlocated:true,seatNumber:1},
  //     {EmpName :"ABC1 PQL1", EMPID:"1",zone:"A",isAlocated:true,seatNumber:2},
  //     {EmpName :"ABC3 PQL3", EMPID:"3",zone:"A",isAlocated:true,seatNumber:3},
  //     {EmpName :"ABC PQL4", EMPID:"4",zone:"A",isAlocated:true,seatNumber:4},
  //     {EmpName :"ABC PQL5", EMPID:"5",zone:"A",isAlocated:true,seatNumber:5},
  //     {EmpName :"ABC PQL6", EMPID:"6",zone:"A",isAlocated:true,seatNumber:6},
  //     {EmpName :"ABC1 PQL7", EMPID:"7",zone:"A",isAlocated:true,seatNumber:7},
  //     {EmpName :"ABC1 PQL8", EMPID:"8",zone:"A",isAlocated:true,seatNumber:8},
  //     {EmpName :"ABC3 PQL9", EMPID:"9",zone:"A",isAlocated:true,seatNumber:9},
  //     {EmpName :"ABC PQL10", EMPID:"10",zone:"A",isAlocated:true,seatNumber:10},
  //     {EmpName :"ABC PQL", EMPID:"11",zone:"A",isAlocated:true,seatNumber:11},
  //     {EmpName :"ABC1 PQL12", EMPID:"12",zone:"A",isAlocated:true,seatNumber:12},
  //     {EmpName :"ABC3 PQL13", EMPID:"13",zone:"A",isAlocated:true,seatNumber:13},
  //     {EmpName :"ABC PQL14", EMPID:"14",zone:"A",isAlocated:true,seatNumber:14},
  //     {EmpName :"ABC PQL15", EMPID:"15",zone:"A",isAlocated:true,seatNumber:15},
  //     {EmpName :"ABC PQL16", EMPID:"16",zone:"A",isAlocated:true,seatNumber:16},
  //     {EmpName :"ABC1 PQL17", EMPID:"17",zone:"A",isAlocated:true,seatNumber:17},
  //     {EmpName :"ABC1 PQL18", EMPID:"18",zone:"A",isAlocated:true,seatNumber:18},
  //     {EmpName :"ABC3 PQL19", EMPID:"19",zone:"A",isAlocated:true,seatNumber:19},
  //     {EmpName :"ABC PQL20", EMPID:"20",zone:"A",isAlocated:true,seatNumber:20}]
  //     },
  //     {zone:"B",seats:[
  //     {EmpName :"ABC PQL", EMPID:"111",zone:"B",isAlocated:true,seatNumber:111},
  //     {EmpName :"ABC1 PQL1", EMPID:"111",zone:"B",isAlocated:true,seatNumber:112},
  //     {EmpName :"ABC3 PQL3", EMPID:"113",zone:"B",isAlocated:true,seatNumber:3},
  //     {EmpName :"ABC PQL4", EMPID:"114",zone:"B",isAlocated:true,seatNumber:114},
  //     {EmpName :"ABC PQL5", EMPID:"115",zone:"B",isAlocated:true,seatNumber:115},
  //     {EmpName :"ABC PQL6", EMPID:"116",zone:"B",isAlocated:true,seatNumber:116},
  //     {EmpName :"ABC1 PQL7", EMPID:"722",zone:"B",isAlocated:true,seatNumber:117},
  //     {EmpName :"ABC1 PQL8", EMPID:"118",zone:"B",isAlocated:true,seatNumber:118},
  //     {EmpName :"ABC3 PQL9", EMPID:"119",zone:"B",isAlocated:true,seatNumber:119},
  //     {EmpName :"ABC PQL10", EMPID:"1110",zone:"B",isAlocated:true,seatNumber:1110},
  //     {EmpName :"ABC PQL", EMPID:"1111",zone:"B",isAlocated:true,seatNumber:1111},
  //     {EmpName :"ABC1 PQL12", EMPID:"1112",zone:"B",isAlocated:true,seatNumber:1112},
  //     {EmpName :"ABC3 PQL13", EMPID:"1113",zone:"B",isAlocated:true,seatNumber:1113},
  //     {EmpName :"ABC PQL14", EMPID:"1114",zone:"B",isAlocated:true,seatNumber:1114},
  //     {EmpName :"ABC PQL15", EMPID:"1115",zone:"B",isAlocated:true,seatNumber:1511},
  //     {EmpName :"ABC PQL16", EMPID:"1116",zone:"B",isAlocated:true,seatNumber:1116},
  //     {EmpName :"ABC1 PQL17", EMPID:"1117",zone:"B",isAlocated:true,seatNumber:1711},
  //     {EmpName :"ABC1 PQL18", EMPID:"1118",zone:"B",isAlocated:true,seatNumber:1118},
  //     {EmpName :"ABC3 PQL19", EMPID:"1119",zone:"B",isAlocated:true,seatNumber:1119},
  //     {EmpName :"ABC PQL20", EMPID:"2011",zone:"B",isAlocated:true,seatNumber:2110}
  //   ]}
  // ];
  // }

}
