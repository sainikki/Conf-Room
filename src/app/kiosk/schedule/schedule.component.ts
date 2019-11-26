import { Component, OnInit, Input } from '@angular/core';
import { DetailsService } from './DetailsService';  


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
    RoomNo = 'projectX';
  
    public Details;
    //initialize the call using StudentService 
    constructor(private _myService: DetailsService) { }
    ngOnInit() {
      this.getDetails();
   
    }
    roomSelected: any;
    // formatSubtitle = (percent: number) : string => {
    //   if(percent >= 100){
    //     return "Congratulations!"
    //   }else if(percent >= 50){
    //     return "Half"
    //   }else if(percent > 0){
    //     return "Just began"
    //   }else {
    //     return "Not started"
    //   }
    // }
    //method called OnInit

    // filterItems(arr, query) {
    //   return arr.filter(function(el) {
    //       return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    //   })
    // }
    getUniqueLocation(detail){
      const locations = []
      for (var i in detail){
          locations.push(detail[i].location);
          this.roomSelected=i;
      }
      return new Set(locations)
    }

    getDetails() {
     this._myService.getDetails().subscribe(
        //read data and assign to public variable students
        data => { this.Details = this.getUniqueLocation(data);
        
        },
        err => console.error(err),
        () => console.log('finished loading')
      );
    }
  }
  
