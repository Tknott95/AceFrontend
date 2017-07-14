import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tk-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postTitle : string = null;
  posts: any = [];

  constructor(private _blogService: BlogService, public sanitizer: DomSanitizer) {
    // for (let post of this.posts) {
    //   if (post.title.length > 10) {
    //     this.postTitle = post.splice(1, 10).concat(' ...');
    //   }
    // }
  }

  ngOnInit() {


    setTimeout(console.log(JSON.stringify(this.posts)), 5000);

    this._blogService.getBlogPosts()
      .subscribe(res => this.posts = res);
  }


}
