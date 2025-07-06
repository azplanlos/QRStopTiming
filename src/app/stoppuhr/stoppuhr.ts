import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, Subject, Subscription, tap, timer } from 'rxjs';
import { Zeit } from '../zeit';

@Component({
  selector: 'app-stoppuhr',
  imports: [],
  templateUrl: './stoppuhr.html',
  styleUrl: './stoppuhr.scss'
})
export class Stoppuhr implements OnInit {
  @Output("seconds")
  private secondsEmitter = new EventEmitter<number>();
  private seconds = 0;
  private timer = new Subject<number>();
  private subscription: Subscription | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef, private zeitService: Zeit) {
    
  }

  ngOnInit(): void {
      this.timer.subscribe(t => {
        this.seconds++;
        this.secondsEmitter.emit(this.seconds);
      });
  }

  zeit(): string {
    return this.zeitService.format(this.seconds);
  }

  start() {
    this.subscription = interval(1000).subscribe(this.timer);
  }

  pause() {
    this.subscription?.unsubscribe();
  }

  reset() {
    this.subscription?.unsubscribe();
    this.seconds = 0;
  }
}
