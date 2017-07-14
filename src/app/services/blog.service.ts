import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class BlogService {
  constructor(private http: Http) { }

  getBlogPosts(): any {
    return this.http.get('http://ec2-54-153-114-109.us-west-1.compute.amazonaws.com/api/blog_posts')
      .map(res => res.json());
  }
}