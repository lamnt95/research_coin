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
      t: 'research',
      n: 'Research',
      ts: [
        {
          t: 'fe-note-l0',
          n: 'L0',
          l: 'https://docs.google.com/document/d/1MY2oHW53WptjAffa20FO4D_NZmGRvb0g7cz_nCzAeuc/edit?usp=sharing',
        },
        {
          t: 11,
          n: 'Stable coin',
          l: 'https://docs.google.com/document/d/1u6UmsMIpm3bcfSpfO8apFpEP0aKWdZYunZ_R5OHoP6A/edit',
        },
        {
          t: 'fe-note-amm-dex',
          n: 'Amm dex',
          l: 'https://docs.google.com/document/d/1Nb1sNwTsUc5RBy6FUDfKzL8EqPW0hvCVw71TNCZ1KUQ/edit?usp=sharing',
        },
        {
          t: 'fe-note-lend',
          n: 'Lend',
          l: 'https://docs.google.com/document/d/1Mnd5_rBovh7ztDAurDRm1_kCKNq9GIryxNHgLIG97YU/edit?usp=sharing',
        },
        {
          t: 'fe-note-api',
          n: 'Api',
          l: 'https://docs.google.com/document/d/1T4gtGuHeZnFgpK0ijZh6EonB9-lfXutRBfnNaHr4oZA/edit?usp=sharing',
        },
        {
          t: 'fe-note-venture',
          n: 'Venture',
          l: 'https://docs.google.com/document/d/1JEqWEbui87N5MmUYioMAldg6vdCTXT7-FP3RjaAa7fk/edit?usp=sharing',
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
