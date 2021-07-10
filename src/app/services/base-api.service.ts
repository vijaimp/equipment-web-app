import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(protected http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  getOne(url: string, name: string): Observable<any> {
    return this.http.get(url + '/' + name);
  }
}
