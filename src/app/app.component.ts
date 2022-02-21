import { Component, VERSION } from '@angular/core';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private sanitizer: DomSanitizer) {}

  ts1: any = [
    {
      t: 1,
      n: 'TEST-1',
      ts: [
        {
          t: 11,
          n: 'TEST-11',
          l: 'https://docs.google.com/document/d/1u6UmsMIpm3bcfSpfO8apFpEP0aKWdZYunZ_R5OHoP6A/edit',
        },
        {
          t: 111,
          n: 'TEST-111',
          l: '111',
        },
        {
          t: 1111,
          n: 'TEST-1111',
          l: '1111',
        },
      ],
    },
    {
      t: 2,
      n: 'TEST-2',
      ts: [
        {
          t: 22,
          n: 'TEST-22',
          l: '22',
        },
        {
          t: 222,
          n: 'TEST-222',
          l: '222',
        },
        {
          t: 2222,
          n: 'TEST-2222',
          l: '2222',
        },
      ],
    },
    {
      t: 3,
      n: 'TEST-3',
      ts: [
        {
          t: 33,
          n: 'TEST-33',
          l: '33',
        },
        {
          t: 333,
          n: 'TEST-333',
          l: '333',
        },
        {
          t: 3333,
          n: 'TEST-3333',
          l: '3333',
        },
      ],
    },
  ];
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
    this.l = this.sanitizer.bypassSecurityTrustResourceUrl(l);
    console.log('link', this.l);
  }
}
