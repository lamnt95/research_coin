import { Component, VERSION } from '@angular/core';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { Api } from './api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Api],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private sanitizer: DomSanitizer, private api: Api) {
    this.api
      .loadMenu()
      .then((res: any) => {
        this.ts1 = res;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  ts1: any = [];
  ts2: any;

  t1: any;
  t2: any;
  l: any;
  c1(t1) {
    this.t1 = t1;
    this.ts2 = _.get(
      _.filter(this.ts1, (i) => i.t == t1),
      '0.ts'
    );
  }

  c2(t2, l) {
    this.t2 = t2;
    this.isLoading = true;
    this.l = this.sanitizer.bypassSecurityTrustResourceUrl(l);
  }

  isLoading: any;
  tabClose: any = '...';
  isshow: any = true;
  cl() {
    this.isshow = !this.isshow;
  }
}
