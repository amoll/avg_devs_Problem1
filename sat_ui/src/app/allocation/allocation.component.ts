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
  userDetails:any;
  employee:any=[];
  departmentList:any=[];
  selectedDepartment:any;
  isDepartmentDisable:boolean=true;
  constructor(
    private lacationService: AllocationService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const idUser: any = localStorage.getItem('currentUser');
    this.userDetails = JSON.parse(idUser);
    this.locations = this.getLocations();
    this.getDepartment();
    this.floors = this.getFloors();
  }

  getLocations() {
    this.lacationService.getLoacations().subscribe((data) => {
      this.locations = data;
    });
  }
  getDepartment() {
    this.employeeService.getEmployeesDepartment().subscribe((data) => {
      this.departmentList = data;
    });
  }
  getFloors() {
     if (this.userDetails.role == "Admin") {
      this.lacationService
        .getDetailsByLocationID(this.selectedLocation)
        .subscribe((data) => {
          this.floors = data.floors;
        });

        this.employeeService
        .getEmployeesAdmin()
        .subscribe((data) => {
          this.employee = data;
        });
    }
    else {
      this.lacationService
        .getLocationByEmployeeID(this.selectedLocation,this.userDetails.id)
        .subscribe((data) => {
          this.floors = data.floors;
        });
        this.employeeService
        .getEmployeesTeam(this.userDetails.id)
        .subscribe((data) => {
          this.employee = data.employeeTeam;
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

    // if (this.userDetails.role != "Admin") {
    var depDetails=this.employee.filter((item:any) => item.employeeId == employeeId);
    this.selectedDepartment=depDetails[0].departmentId;
    // }

    this.employeeService.getEmployeesCount(employeeId).subscribe((data) => {
      this.employeeCount = data;
    });
  }

  onChangeZone(event: any) {
    this.selectedZone = event.target.value;
  }
  allocateSeatsToManager() {
   let isEmployeeAlredyAllocated=false;
   for (var index = 0; index < this.floors.length; index++) {
    for (var index1 = 0; index1 < this.floors[index].zones.length; index1++) {
      for (var index2 = 0; index2 < this.floors[index].zones[index1].desks.length; index2++) {
        if (this.floors[index].zones[index1].desks[index2].allocatedToEmpId==this.selectedEmployee) {
          isEmployeeAlredyAllocated=true;
        }
      }
    }
    }
if(!isEmployeeAlredyAllocated)
{
    var count = 0;
    for (var i = 0; i < this.zones.length; i++) {
      for (var j = 0; j < this.zones[i].desks.length; j++) {
        if (!this.zones[i].desks[j].booked && count < this.employeeCount.maxAllowedSeatAllocation) {
          count++;
        }
      }
    }
    if (count != this.employeeCount.maxAllowedSeatAllocation) {
      alert("Insufficient Seats on floor! Total : " + this.employeeCount.maxAllowedSeatAllocation + "(" + count + ")")
    }
    else {
      var count = 0;
    for (var i = 0; i < this.zones.length; i++) {
      for (var j = 0; j < this.zones[i].desks.length; j++) {
        if (!this.zones[i].desks[j].booked && count < this.employeeCount.maxAllowedSeatAllocation) {
          this.zones[i].desks[j].booked = true;
          this.zones[i].desks[j].allocatedToEmpId = this.selectedEmployee;
          this.bookList.push(this.zones[i].desks[j].id);
          count++;
        }
      }
    }
      this.isSave = true;
    }
  }
  else
  {
    alert("Space already allocated to Employee !" );
  }
  }
  save() {
    var seatBook = {
      allocatedByEmpId: this.userDetails.id,
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
