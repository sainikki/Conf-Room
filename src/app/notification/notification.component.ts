import { Component,OnInit } from '@angular/core';
import { PushNotificationsService} from 'ng-push';
import { EventService } from '../event.service'; 
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})


export class NotificationComponent   {
  public events;  
  //initialize the call using eventService
  
constructor(public _myService: EventService  ,public __myService:PushNotificationsService) {

  // this.getEvents();

 
   }

   ngOnInit() {
   


    setTimeout(() => {
      window.location.reload();
    }, 9000); 
    this.getEvents();
  }
   
  getEvents(){
    var ids = [];
console.log("in events");

  this._myService.getevent().subscribe(
    
     data=> {
      this.events = data;//as string [];	 // FILL THE ARRAY WITH DATA.

  
  var sdate = new Date(this.events[0].startdate);
const edate= new Date(this.events[0].enddate);
console.log(sdate);
console.log(edate);

var dt = new Date(edate);

var dt2=dt.setMinutes( dt.getMinutes() - 10 );

console.log(dt2);

const expirytime = new Date(dt2);
var today = new Date();
console.log(today);
console.log(expirytime);

var td2= new Date("2019-11-19T19:16:20-05:00");

console.log(td2);

if (today <= td2)
{
  console.log("in if");
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
  // console.log("in else");
}

 

    },
  );
}

  }
  

//   self.addEventListener('push', event => {
//     let data = event.data.json();
//     let title = '', args = {};

//     title = 'Notification!!';
//     args = { 'body': 'Hello hello',
//              'icon': '/static/icon64.png',
//              'tag': 'some-tag' };

//     event.waitUntil(self.registration.showNotification(title, args));
// });
  
  
  // this.__myService.requestPermission();


  // var a = 7;
    
  //         this.interval = setInterval(() => {
  //           console.log(a++)
  //           this.date =  new Date().toLocaleTimeString();
  //           if(a > 5)
  //           {
  //             let options = { //set options
  //                        body: "Meeting ends at... "+this.date,
  //                         icon: "assets/images/ntfy.jpg" ,//adding an icon                                       
  //                         requireInteraction:true                 
  //                        }               
  //                       this.__myService.create('Meeting', options).subscribe( //creates a notification
  //                         (                     res: any) => console.log(res),
  //                         (                      err: any) => console.log(err)
  //                       );
  //                       console.log("notification displayed");  
  //                       console.log(a);     
  //                        clearInterval(this.interval);
  //           }
  //         }, 1000);

  //}
//     this.__myService.requestPermission();
//    
      

//   }



// }






// // constructor( private _pushNotifications: PushNotificationsService ) {
// //   this._pushNotifications.requestPermission();
// //   var a = 1;
  
// //   this.interval = setInterval(() => {
// //     console.log(a++)
// //     this.date =  new Date().toLocaleTimeString();
// //     if(a > 5)
// //     {
// //       let options = { //set options
// //                  body: "Meeting ends at... "+this.date,
// //                   icon: "assets/images/ntfy.jpg" ,//adding an icon                                       
// //                   requireInteraction:true                 
// //                  }               
// //                 this._pushNotifications.create('Meeting', options).subscribe( //creates a notification
// //                   (                     res: any) => console.log(res),
// //                   (                      err: any) => console.log(err)
// //                 );
// //                 console.log("notification displayed");  
// //                 console.log(a);     
// //                  clearInterval(this.interval);
//     }
//    }, 1000);
// }
  //}