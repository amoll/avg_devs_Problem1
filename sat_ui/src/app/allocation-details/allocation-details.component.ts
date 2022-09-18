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

}
