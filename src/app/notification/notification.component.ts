import { Component,OnInit } from '@angular/core';
import { PushNotificationsService} from 'ng-push';
import { EventService } from '../event.service'; 

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})


export class NotificationComponent   {
  public events;  
  //initialize the call using eventService
  
constructor(public _myService: EventService  ,public __myService:PushNotificationsService) {

  this.getEvents();

 
   }
  getEvents(){
  this._myService.getevent().subscribe(
      
     data=> {
      this.events = data ;//as string [];	 // FILL THE ARRAY WITH DATA.
     console.log(this.events);
//var test ='';
  // var value = JSON.parse(this.events[0]);
//data = Object.keys(value)[1];
//console.log(value);


    },
  );


  }
  date;
  notify(){ //our function to be called on click
    this.date =  new Date().toLocaleTimeString();
    let options = { //set options
      body: "Meeting ends at... "+this.date,
                      icon: "assets/img/ntfy.jpg" ,//adding an icon                                       
                           requireInteraction:true               
    }
     this.__myService.create('Meeting', options).subscribe( //creates a notification
        res => console.log(res),
        err => console.log(err)
    );
  }
  }
  


  
  
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