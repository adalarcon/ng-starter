import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { environment }  from '../../environments/environment';

@Injectable()
export class DataService {

  api = '/api/v1/';

  constructor( private http:HttpClient) { }

  find(collection: String){
    return this.http.get<any>(environment.serverBaseURL + this.api + collection+ "/");
  }

  findBy(collection: String, query: String){
    return this.http.get<any>(environment.serverBaseURL + this.api + collection + "/" + query);
  }

  findById(collection: String, query: String){
    return this.http.get<any>(environment.serverBaseURL + this.api + collection + "/" + query);
  }

  insertOne(collection, obj){
    return this.http.post(environment.serverBaseURL + this.api + collection + "/", obj);
  }

  updateOne(collection, obj){
    return this.http.put(environment.serverBaseURL + this.api + collection + "/",  obj);
  }

  deleteOne(collection, id){
    return this.http.delete(environment.serverBaseURL + this.api + collection + "/" + id);
  }

}
