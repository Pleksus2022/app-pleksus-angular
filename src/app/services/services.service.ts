import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(protected http: HttpClient) { }

  protected postQuery<T>(query: string, data: any){
    query = environment.url + query;
    console.log(query)
    return this.http.post<T>( query, data );
  }

  protected putQuery<T>(query: string, data: any){
    query = environment.url + query;
    console.log(query)
    return this.http.put<T>( query, data );
  }

  protected patchQuery<T>(query: string, data: any){
    query = environment.url + query;
    console.log(data)
    return this.http.patch<T>( query, data );
  }

  protected execQuery<T>( query: string ) {
    query = environment.url + query;
    return this.http.get<T>( query );
  }
  
}
