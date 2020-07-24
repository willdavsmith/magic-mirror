import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  private timer;
  public date: string;
  public time: string;
  public ampm: string;
  public seconds: string;

  constructor() {}

  tick() {
    const locale = moment(Date.now());
    this.date = locale.format('dddd, MMMM Do, YYYY');
    this.time = locale.format('h:mm');
    this.ampm = locale.format('a');
    this.seconds = locale.format('ss');
  }

  ngOnInit(): void {
    this.tick();
    this.timer = setInterval(
      () => this.tick(), 1000
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
