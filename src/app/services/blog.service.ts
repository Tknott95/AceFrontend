import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class BlogService {
  constructor(private http: Http) { }

  getBlogPosts(): any {
    return this.http.get('http://localhost:8080/api/blog_posts')
      .map(res => res.json());
  }
}