import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tk-lang-cara',
  templateUrl: './lang-cara.component.html',
  styleUrls: ['./lang-cara.component.scss']
})
export class LangCaraComponent implements OnInit {

 @ViewChild('rightArrowBtn') arrowBtn;

  unity3DLogo: string = 'devicons devicons-unity_small animated fadeInRight';
  angularLogo: string = 'devicons devicons-angular';
  npmLogo: string = 'devicons devicons-npm animated fadeInRight';
  sassLogo: string = 'devicons devicons-sass';
  linuxPengLogo: string = 'devicons devicons-linux';
  nodeJsLogo: string = 'devicons devicons-nodejs animated fadeInLeft';
  golangLogo: string = 'devicons devicons-go';
  gulpLogo: string = 'devicons devicons-gulp animated fadeInLeft';

  logo1: string = this.angularLogo;
  logo2: string = this.nodeJsLogo;
  logo3: string = this.gulpLogo;
  logo4: string = this.sassLogo;

  constructor(protected elementRef: ElementRef) {

  }

  ngOnInit() {
    this.logoChangeInterval();
  }

  logoChangeInterval(): void {
    setInterval(() => {
      this.nextLogo()
    }, 5000);
  }

  nextLogo(): string {
    if (this.logo1 == this.angularLogo) {
      this.logo1 = this.unity3DLogo;
    } else {
      this.logo1 = this.angularLogo;
    }

    if (this.logo2 == this.nodeJsLogo) {
      this.logo2 = this.linuxPengLogo;
    } else {
      this.logo2 = this.nodeJsLogo;
    }

    if (this.logo3 == this.gulpLogo) {
      this.logo3 = this.golangLogo;
    } else {
      this.logo3 = this.gulpLogo;
    }

    if (this.logo4 == this.sassLogo) {
      this.logo4 = this.npmLogo;
    } else {
      this.logo4 = this.sassLogo;
    }

    return this.logo1 && this.logo2 && this.logo3 && this.logo4;
  }

}
