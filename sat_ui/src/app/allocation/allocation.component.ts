import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../service/allocation.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css'],
})
export class AllocationComponent implements OnInit {
  selectedLocation: any = '1';
  selectedFloor: any;
  selectedZone: any;
  allocationList: any = [];
  locations: any = [];
  floors: any = [];
  zones: any = [];
  employeeCount: any;
  bookList:any=[];
  startDate:Date=new Date();
  toDate:Date=new Date();
  constructor(
    private lacationService: AllocationService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.locations = this.getLocations();
    this.floors = this.getFloors();
    this.allocationList = this.zones;
  }

  getLocations() {
    debugger
    this.lacationService.getLoacations().subscribe((data) => {
      this.locations = data;
    });
  }
  getFloors() {
    this.lacationService
      .getDetailsByLocationID(this.selectedLocation)
      .subscribe((data) => {
        this.floors = data.floors;
      });
  }
  onChangeFloor(event: any) {
    var floorid = event.target.value;
    for (var i = 0; i < this.floors.length; i++) {
      if (this.floors[i].id == floorid) this.zones = this.floors[i].zones;
    }
  }

  onChangeEmployee(event: any) {
    var employeeId = event.target.value;
    this.employeeService.getEmployeesCount(employeeId).subscribe((data) => {
      this.employeeCount = data;
    });
  }
  allocateSeatsToManager() {
    var count = 0;
    for (var i = 0; i < this.allocationList.length; i++) {
      if (this.allocationList[i].id == this.selectedZone) {
        for (var j = 0; j < this.allocationList[i].desks.length; j++) {
          debugger
          if (!this.allocationList[i].desks[j].booked && count < this.employeeCount.maxAllowedSeatAllocation ) {
            this.allocationList[i].desks[j].booked=true;
            this.bookList.push(this.allocationList[i].desks[j].id);
            count++;
          }
        }
      }
    }
  }
}
