import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'tk-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent implements OnInit {
  posts: any = [];

  constructor(private _blogService: BlogService) { }

  ngOnInit() {

    this._blogService.getBlogPosts()
      .subscribe(res => this.posts = res)
  }

}
