import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { QRCodeComponent } from "angularx-qrcode";
import qrcode from "qrcode";
import { Button, ButtonModule } from "primeng/button";

@Component({
  selector: 'app-lauefer-option',
  imports: [QRCodeComponent, ButtonModule],
  templateUrl: './lauefer-option.html',
  styleUrl: './lauefer-option.scss'
})
export class LaueferOption implements OnInit {

  @Input()
  option: any;

  @ViewChild('qrCode')
  qrcodeView: QRCodeComponent | undefined;

  ngOnInit(): void {
  }

  save() {
    qrcode.toDataURL(this.qrData(), {width: 500, type: 'image/png'}).then(data => {
      LaueferOption.downloadFile(data, this.option.name + '.png');
    });
  }

  qrData(): string {
    return 'qrstoptiming:' + this.option.startnummer;
  }

  private static downloadFile(urlForDownload: string, fileName: string) {
    const linkElement = document.createElement('a');

    linkElement.href = urlForDownload;
    linkElement.download = fileName;
    linkElement.click();

    URL.revokeObjectURL(urlForDownload); // Free memory
}

}
