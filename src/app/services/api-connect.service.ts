import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
 public url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-08-01&' +
          'sortBy=popularity&' +
          'apiKey=49a15aaf63d043b691fbac6e5b9592fc';
  API_KEY = '49a15aaf63d043b691fbac6e5b9592fc';
  constructor(private httpClient: HttpClient) { }
  public getFeed(){
    return this.httpClient.get(this.url)
  }

}
