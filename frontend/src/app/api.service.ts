import { Injectable } from '@angular/core';
import { Policy } from  './policy';
import { Observable } from  'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:80/newcrud/angular-9-php-app/backend";
  
  
  constructor( private httpClient:HttpClient) { } 
  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  createPolicy(policy: Policy): Observable<Policy>{
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  }
  updatePolicy(policy: Policy){
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/api/update.php`, policy);   
  }
  deletePolicy(id: number){
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
}



