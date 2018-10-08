import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WordpressProvider {

  baseUrl: string = "http://u875520.s25.wh1.su/wp-json/wp/v2/"

  constructor(public http: Http) {

  }

  retrieveCategories(){
    return this.http.get(this.baseUrl + 'categories')
    .map(res => res.json());
  }

  retrievePostsInCategory(categoryId: number){
    return this.http.get(this.baseUrl + 'posts?categories=' + categoryId)
    .map(res => res.json());
  }

}