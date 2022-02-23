import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
  constructor(private http: HttpClient) {}

  loadMenu() {
    return this.http
      .get(
        `https://raw.githubusercontent.com/lamnt95/fe-coin-note-cate-menu/main/menu.json`
      )
      .toPromise();
  }
}
