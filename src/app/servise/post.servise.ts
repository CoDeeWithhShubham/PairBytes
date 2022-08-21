import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostServise {
  constructor(private http: HttpClient) { }
  postChange = new Subject<[]>();


  post: any = [];

  onGetPost() {
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/posts')
  }


  onGetSinPost(id: number) {
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/posts/' + id)
      
      
}
}