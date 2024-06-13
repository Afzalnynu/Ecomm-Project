import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login, signUp } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  

  constructor(private _httpClient:HttpClient) { }

  signUpdata(data:signUp):Observable<any>{
    return this._httpClient.post("http://localhost:3000/seller",data)
}
 signInData(data:login):Observable<any>{
  return this._httpClient.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`)
 }

}
