import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  postData(url: string, data: any, headers?: any) {
    console.log("postData on " + url + " with data: " + JSON.stringify(data))
    // let resp = this.http.post(url, data, headers).subscribe(res => {console.log("postData response: " + JSON.stringify(res))})
    return this.http.post(url, data, headers)
  }

  getData(url: string, headers?: any): Observable<any> {
    return this.http.get(url, headers)
  }

  putData(url: string, data: any, headers?: any) {
    return this.http.put(url, data, headers)
  }

  deleteData(url: string, headers?: any) {
    return this.http.delete(url, headers)
  }
}
