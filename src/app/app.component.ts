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
          t: 'fe-note-perp',
          n: 'Perp',
          l: 'https://docs.google.com/document/d/1SLqadQxFmQxcAlF9oSVja2-BFziM7jzF8W2KG22IC5Q/edit?usp=sharing',
        },
        {
          t: 'fe-note-api',
          n: 'Api',
          l: 'https://docs.google.com/document/d/1T4gtGuHeZnFgpK0ijZh6EonB9-lfXutRBfnNaHr4oZA/edit?usp=sharing',
        },
        {
          t: 'fe-note-game',
          n: 'Game',
          l: 'https://docs.google.com/document/d/1NIwTQjL0qcO0eHOayNSV7WtwlK61ofNqqRgKh8qjUMY/edit?usp=sharing',
        },
        {
          t: 'fe-note-need-read',
          n: 'Need',
          l: 'https://docs.google.com/document/d/1MMGZ6_NPx98xkJltJLVEQhuyqPQXhvnhiW63PjDRl-U/edit?usp=sharing',
        },
        {
          t: 'fe-note-added',
          n: 'Added',
          l: 'https://docs.google.com/document/d/1i2s1Cg4VdA61rNp-qEEB51UYqjKaHSR-fKSmUP4EUpw/edit?usp=sharing',
        },
        {
          t: 'fe-note-checkin',
          n: 'Checkin',
          l: 'https://docs.google.com/spreadsheets/d/14sYVRV2dVFK5lMUSgHFrQBX2KG5z44zx39jWUkzHlMQ/edit?usp=sharing',
        },
      ],
    },
    {
      t: 2,
      n: 'L0',
      ts: [
        {
          t: 'fe-note-eth',
          n: 'eth',
          l: 'https://docs.google.com/document/d/1IxJcPRA_CUqvNv4mNjPVNQJx4PunuGc-4N05oRUBDaY/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-sol',
          n: 'sol',
          l: 'https://docs.google.com/document/d/1Pxctoq_kIzJtVBsMf_3eP5NVVZA1-ueoR4FXWNugA9M/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-terra',
          n: 'terra',
          l: 'https://docs.google.com/document/d/1b32vZH9DwHNDutCvmqNmzkmD3dq6_5pIfqqBO-0bY9I/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-dot',
          n: 'dot',
          l: 'https://docs.google.com/document/d/1srUK6jJGRHWDr8Q6zYceLKUsibdfAxtvd9c-qktgwpY/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-avax',
          n: 'avax',
          l: 'https://docs.google.com/document/d/1y05DxfDGtsLKMsBh1XamSnB3fukAjKAGCA6x5DoGiMo/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-shib',
          n: 'shib',
          l: 'https://docs.google.com/document/d/1kZl1Wq2eBNlMFqQkOSci-r3UYgEDho60Yk9WZ2N5eMY/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-polygon',
          n: 'polygon',
          l: 'https://docs.google.com/document/d/18_pn4j03ZrrdKGAFMSsuJ_iSKn9l9SSusPV9Qrr5z4Q/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-atom',
          n: 'atom',
          l: 'https://docs.google.com/document/d/18ePWTFIvOOwv8eX_EoAjuS3gTgXrnUori6Cn07Ky8-4/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-near',
          n: 'near',
          l: 'https://docs.google.com/document/d/1Q6lfqkh9OAgYl1epxn7A3sbK8ro0lRWIj8ZGjkRcpXg/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-fantom',
          n: 'fantom',
          l: 'https://docs.google.com/document/d/1oVeGVlcmlrG1wJvI8Bzi2GJ8nxzgyRVmGDtFgFov_5o/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-metis',
          n: 'metis',
          l: 'https://docs.google.com/document/d/17x8zpLYJ0FkWoCq3jtyKH4c6dxRvpSlymGhQluJ36Nc/edit?usp=sharing',
          lv: 1,
        },
      ],
    },
    {
      t: 3,
      n: 'Defi',
      ts: [
        {
          t: 'fe-note-solidly',
          n: 'Solidly',
          l: 'https://docs.google.com/document/d/1XAKkIn5A8lMI935rpVj9jy898VqzHod9F6mgyc8ODFM/edit?usp=sharing',
        },
        {
          t: 'fe-note-link',
          n: 'link',
          l: 'https://docs.google.com/document/d/1DOdEwEi8lcguCMWLZ10t1JQV5yV8x4USUQwMU6ZZ8GI/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-theta',
          n: 'theta',
          l: 'https://docs.google.com/document/d/1J6hh-tkC7Mvrg_IAvB-AJTviTZUMMkZyyumyAzlzk-o/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-grt',
          n: 'grt',
          l: 'https://docs.google.com/document/d/10zpngMYNcWbJtztVnsHOYOR98oQIo1FElIZHxwx9FbA/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-arweave',
          n: 'arweave',
          l: 'https://docs.google.com/document/d/19dH5LlMD0Lu01OEZ3DcsFfcAk_hKhLk8S-xuhMuBrq0/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-crv',
          n: 'crv',
          l: 'https://docs.google.com/document/d/1ZRMIbnvQ_cJkWS15IkzLb8bS59Q8bdVHHT1XMHRIqgA/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-audio',
          n: 'audio',
          l: 'https://docs.google.com/document/d/1DI7PpatovgbXVTtQqmQiGrymXrGJffxwQagwKCUjoNE/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-people',
          n: 'people',
          l: 'https://docs.google.com/document/d/1XzesYTUVZ7hG7MxyNf36OO26cRwiPlahk6ylsb4X9kU/edit?usp=sharing',
          lv: 1,
        },
      ],
    },
    {
      t: 4,
      n: 'Game_Meta',
      ts: [
        {
          t: 'fe-note-sand',
          n: 'sand',
          l: 'https://docs.google.com/document/d/1Zy3HOhdhqQLmyyjdrE_QwQyA0AOeql5Y_gwbWT53Oa4/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-mana',
          n: 'mana',
          l: 'https://docs.google.com/document/d/1SvkgTA2PXa4OFSdzxXKdG6hh7zmi0MKdgCYV1ds_QU8/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-gala',
          n: 'gala',
          l: 'https://docs.google.com/document/d/1W-4vJisz6BTcdkz0zMzK9WRrWqEi7DFgx7GPEWz2x34/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-enj',
          n: 'enj',
          l: 'https://docs.google.com/document/d/1x1c3O08P3CGozXOy3lxmqdYWhKXsoApehMyYodi7j1k/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-ilv',
          n: 'ilv',
          l: 'https://docs.google.com/document/d/1-RCsAewZqJROF_m7xxRPQsv2D8AiNiG36JnKunx3nMA/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-ygg',
          n: 'ygg',
          l: 'https://docs.google.com/document/d/1t2f4j2kHTI-ki4nNzaB09Kv8cOCspsVZwB325Uy9qeA/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-mc',
          n: 'mc',
          l: 'https://docs.google.com/document/d/1Ly8-vzEnLcHsmKZ_kbequhhIwNQ93LoCJo30k1MNAb0/edit?usp=sharing',
          lv: 1,
        },
        {
          t: 'fe-note-guildfi',
          n: 'guildfi',
          l: 'https://docs.google.com/document/d/1o28tDsA599W57OdPu9O8ETia0scTan6VaeyI06njyf8/edit?usp=sharing',
          lv: 1,
        },
      ],
    },
    {
      t: 5,
      n: 'Report',
      ts: [
        {
          t: 'fe-note-report-c98-c68-gfs-coinf-otis',
          n: 'group-vn',
          l: 'https://docs.google.com/document/d/1ZXMSZCT_pVyMlRZuBhFA6hSgTZ8sJPIV-VR7MK_Kxp8/edit?usp=sharing',
        },
        {
          t: 'fe-note-linhtinh',
          n: 'linh tinh',
          l: 'https://docs.google.com/document/d/1tzblafBjCyIf4hqzAuqG4L9MzSEiakvcghf52dkeVbQ/edit?usp=sharing',
        },
      ],
    },
    {
      t: 'Venture',
      n: 'Venture',
      ts: [
        {
          t: 'fe-note-venture',
          n: 'Venture',
          l: 'https://docs.google.com/document/d/1JEqWEbui87N5MmUYioMAldg6vdCTXT7-FP3RjaAa7fk/edit?usp=sharing',
        },
        {
          t: 'fe-note-a16z',
          n: 'a16z',
          l: 'https://docs.google.com/document/d/1HZQpj68CXV60kjulFppIKsu7GsrAkaoW5tPfs2JcO_s/edit?usp=sharing',
        },
        {
          t: 'fe-note-binance',
          n: 'Binance',
          l: 'https://docs.google.com/document/d/1W0VGMHlFsx0D6W7yDlY5oWKy3WjMUd8kvt-8FT4HJPQ/edit?usp=sharing',
        },
        {
          t: 'fe-note-multicoin',
          n: 'Multicoin',
          l: 'https://docs.google.com/document/d/1kmXT1sWbx5aE36dR07ZkkzJHbrIy2kZo4ay3iU4FJbs/edit?usp=sharing',
        },
        {
          t: 'fe-note-coinbase',
          n: 'Coinbase',
          l: 'https://docs.google.com/document/d/1XeRwgHMZtzwvdxUspe4KsSiZThrj4WVQqpBtYBAzn6M/edit?usp=sharing',
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
