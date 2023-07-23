import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { APIService } from './api.service';

//const apiKey =
//'abc00'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${environment.apiUrl}`,
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  //private baseUrl = 'https://localhost:44365/swagger/index.html';
  //private proxyUrl = 'https://localhost:3000';



  constructor(private apiService:APIService) {

  }

  //async dolulukcafe(): Promise<Object | undefined> {
    //const url = `${this.proxyUrl}${this.baseUrl}`;
    //const data = await this.http
     // .get(url, httpOptions)
      //.toPromise();
    //return data;
    dolulukcafe() {
      this.apiService.dolulukcafe().subscribe(
        ()=>{

        }
      )



  }
}
