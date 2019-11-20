import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processing-timer',
   template: `{{ now }}`,
  styleUrls: ['./processing-timer.component.css']
})
export class ProcessingTimerComponent implements OnInit {

  public now: Date = new Date();
  ngOnInit() {
  }
  constructor() {
      setInterval(() => {
        this.now = new Date();
      }, 1);
  }
}






   

