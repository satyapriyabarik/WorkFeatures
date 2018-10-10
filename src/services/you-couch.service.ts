import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class ycDetails {
  constructor(public tid: string, public tname: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class YouCouchService {
  constructor(private _http:HttpClient) { 
   
  }
  public getyouCouch(): Observable<any>{
    let apiRoot:string = '../assets/youCouchdata.json';
    
    return this._http.get(apiRoot);
   
  }
   public getAllCountry(): Observable<any>{
    let countries:string = '../assets/countryDetails.json';
    
    return this._http.get(countries);
   
  }
  
  
}
