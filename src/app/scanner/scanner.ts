import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import QrScanner from 'qr-scanner';
import { BehaviorSubject, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { Panel, PanelModule } from "primeng/panel";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'scanner',
  imports: [PanelModule, ButtonModule],
  templateUrl: './scanner.html',
  styleUrl: './scanner.scss'
})
export class Scanner implements AfterViewInit, OnInit {
  @ViewChild("qrVideo")
  private videoElem!: ElementRef<HTMLVideoElement>;

  @Output("qrCode")
  private qrCode$: Subject<String> = new Subject<String>();

  private filterSubject = new Subject<String>;

  private qrScanner!: QrScanner;

  ngOnInit(): void {
      this.filterSubject.pipe(distinctUntilChanged()).subscribe(this.qrCode$);
  }

  ngAfterViewInit(): void {
    this.qrScanner = new QrScanner(
        this.videoElem.nativeElement,
        result => this.filterSubject.next(result.data),
        { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
    );
  }

  start() {
    this.qrScanner.start();
  }

}
