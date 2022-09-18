import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-allocation-details',
  templateUrl: './allocation-details.component.html',
  styleUrls: ['./allocation-details.component.css']
})
export class AllocationDetailsComponent implements OnInit {
  @Input() allocationList :any= []; 
  constructor() { }

  ngOnInit(): void {
  }
  enableDisableRule(item: any,zone: string)
  {
   var  checkedList:any[] = [];
    for (var i = 0; i < this.allocationList.length; i++) {
      if(this.allocationList[i].zone==zone)
      {
        for (var j = 0; j < this.allocationList[i].seats.length; j++) {
         if(this.allocationList[i].seats[j].seatNumber==item.seatNumber)
          this.allocationList[i].seats[j].isAlocated=!this.allocationList[i].seats[j].isAlocated;
        }
        
      }
      
    }

   // this.allocationList = JSON.stringify(checkedList);
  }
}
