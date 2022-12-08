import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:5000/scale';
  private url_tare = 'http://localhost:5000/scale/tare';
  getPosts() {
    return this.http.get(this.url);
  }
  tare() {
    return this.http.get(this.url_tare);
  }
}
