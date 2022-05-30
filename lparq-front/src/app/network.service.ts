import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  async postData(url: string, data: any, headers?: any) {
    console.log("postData on " + url + " with data: " + JSON.stringify(data))
    let resp = await this.http.post(url, data, headers)
    return resp
  }

  getData(url: string, headers?: any) {
    return this.http.get(url, headers)
  }

  putData(url: string, data: any, headers?: any) {
    return this.http.put(url, data, headers)
  }

  deleteData(url: string, headers?: any) {
    return this.http.delete(url, headers)
  }
}
