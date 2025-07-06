import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Scanner } from "./scanner/scanner";
import { Stoppuhr } from './stoppuhr/stoppuhr';
import { LaeuferStop } from './laeufer-stop/laeufer-stop';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Scanner, Stoppuhr, LaeuferStop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  sec: number = 0;
  runnerScan = new Subject<string>();

  seconds(num: number) {
    this.sec = num;
  }

  runner(event: String) {
    console.log(event);
    this.runnerScan.next(event.toString());
  }
  protected title = 'QRStopTiming2';
}
