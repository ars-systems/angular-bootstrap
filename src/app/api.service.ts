import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    configUrl = 'http://private-1b3550-phpbackend.apiary-mock.com/offerings';

    getConfig() {
      return this.http.get(this.configUrl);
    }
    
}

