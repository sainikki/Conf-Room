import { Component,OnInit } from '@angular/core';
import { PushNotificationsService} from 'ng-push';
import { EventService } from 'src/app/event.service'; 


@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  public runtime=10000;
  public events;  
  //initialize the call using eventService
  
constructor(public _myService: EventService  ,public __myService:PushNotificationsService) {
   }

   ngOnInit() {
    setTimeout(() => {
      window.location.reload();
    }, 30000); //Page reloads for every 30 seconds 
    this.getEvents();
  }
   
  getEvents(){
 
console.log("Notification process starts");
  this._myService.getevent().subscribe(  
     data=> {
      this.events = data;
const edate= new Date(this.events[0].enddate);
var Endtimediff=edate.setMinutes( edate.getMinutes() - 10 );
var Endtime2= new Date(Endtimediff)
var MeetingEndTime =  Endtime2.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
console.log("Meeting End Time"+" "+MeetingEndTime);

var Today = new Date();
var TodayTime= Today.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
console.log( "Today Time"+" "+TodayTime);

//Testing - Replace MeetingEndTime with TestTime in the if condition
var td2= new Date("2019-11-19T21:03:00-05:00");
var TestTime = td2.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
console.log("Test Time"+" " +TestTime );

if (TodayTime === MeetingEndTime)
{
  console.log("Checking for notification");
    let options = { //set options
      body: "Meeting ends at... "+edate.toLocaleString(),
                      icon: "assets/img/ntfy.jpg" ,//adding an icon                                       
                           requireInteraction:true               
    }
     this.__myService.create('Meeting', options).subscribe( //creates a notification
        res => console.log(res),
        err => console.log(err)
    );
}
else{
   console.log("Notification is not displayed");
}
console.log("Notification process ends");

    },
    
  );
  
}}