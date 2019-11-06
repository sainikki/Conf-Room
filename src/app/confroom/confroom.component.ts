import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-confroom',
  templateUrl: './confroom.component.html',
  styleUrls: ['./confroom.component.css']
})
export class ConfroomComponent implements OnInit {
  bookingModel = new Booking(9, 28, 2020, 11, 15, "AM", 11, 30, "PM", 100, "room_c");

  constructor() { }
onSubmit(){
  console.log(this.bookingModel);
}
  ngOnInit() {
  }
}
