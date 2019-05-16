import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  url='http://178.62.4.69:5000/api/v1/productsByCategoryId/7'

  getData():Observable<any>{
    return this.http.get<any>(this.url)
  }

}
