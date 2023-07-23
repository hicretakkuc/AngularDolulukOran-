import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey = 'hotterthanever'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${environment.apiKey}`,
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private baseUrl = 'https://localhost:44365/swagger/index.html';
  private proxyUrl = 'https://cors-anywhere.dolulukapp.com/';

  constructor(private http: HttpClient) {}

  kafeDoluluk() {
    const url = `${this.proxyUrl}${this.baseUrl}`;
    return this.http.get(url, httpOptions);
  }

}
