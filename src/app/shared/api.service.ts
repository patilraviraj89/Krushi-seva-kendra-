import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
   baseurl="http://localhost:7169/";
  constructor(private http:HttpClient) { }

  get(url:string){
    return this.http.get(this.baseurl + url);
  }
  post(url:string,data:any){
    return this.http.post(this.baseurl + url,data);
  }
  put(url:string,data:any){
    return this.http.put(this.baseurl + url,data);
  }
  delete(url:string){
    return this.http.delete(this.baseurl + url);
  }
  
  
}
