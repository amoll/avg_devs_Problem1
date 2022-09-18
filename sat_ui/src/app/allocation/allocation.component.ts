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
  selectedLocation: any = 1;
  selectedFloor: any = 0;
  selectedZone: any = 0;
  selectedEmployee: any = 0;
  allocationList: any = [];
  locations: any = [];
  floors: any = [];
  zones: any = [];
  employeeCount: any;
  bookList: any = [];
  startDate: Date = new Date();
  toDate: Date = new Date();
  isSave: boolean = false;
  constructor(
    private lacationService: AllocationService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.locations = this.getLocations();
    this.floors = this.getFloors();
    this.allocationList = this.zones;
  }

  getLocations() {
    this.lacationService.getLoacations().subscribe((data) => {
      this.locations = data;
    });
  }
  getFloors() {
    const idUser: any = localStorage.getItem('currentUser');
    const item = JSON.parse(idUser);
    if (item.role == "Admin") {
      this.lacationService
        .getDetailsByLocationID(this.selectedLocation)
        .subscribe((data) => {
          this.floors = data.floors;
        });
    }
    else {
      this.lacationService
        .getLocationByEmployeeID(this.selectedLocation, item.id)
        .subscribe((data) => {
          this.floors = data.floors;
        });
    }

  }
  onChangeFloor(event: any) {
    var floorid = event.target.value;
    for (var i = 0; i < this.floors.length; i++) {
      if (this.floors[i].id == floorid) {
        this.zones = this.floors[i].zones;
        this.allocationList = this.floors[i].zones;
      }
    }
  }

  onChangeEmployee(event: any) {
    var employeeId = event.target.value;
    this.employeeService.getEmployeesCount(employeeId).subscribe((data) => {
      this.employeeCount = data;
    });
  }

  onChangeZone(event: any) {
    this.selectedZone = event.target.value;
  }
  allocateSeatsToManager() {
    var count = 0;
    for (var i = 0; i < this.zones.length; i++) {
      //  if (this.zones[i].id == this.selectedZone) {
      for (var j = 0; j < this.zones[i].desks.length; j++) {
        if (count < this.employeeCount.maxAllowedSeatAllocation) {
          this.zones[i].desks[j].booked = true;
          this.bookList.push(this.zones[i].desks[j].id);
          count++;
        }
      }
      // }
    }
    if (count != this.employeeCount.maxAllowedSeatAllocation) {
      alert("insufficient Seats on floor! Total : " + this.employeeCount.maxAllowedSeatAllocation + "(" + count + ")")
    }
    else {
      this.isSave = true;
    }
  }
  save() {
    const idUser = localStorage.getItem('id');
    var seatBook = {
      allocatedByEmpId: idUser,
      allocatedToEmpId: this.selectedEmployee,
      startDate: this.startDate,
      endDate: this.toDate,
      desks: this.bookList
    }

    this.lacationService.bookAllocation(seatBook).subscribe((data) => {
      alert("Save Record Sucessfuly!")
    });

  }

}
