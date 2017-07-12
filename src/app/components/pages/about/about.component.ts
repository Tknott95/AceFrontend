import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    imgTexWBaby: string = 'https://pbs.twimg.com/profile_images/797636250869997570/7_MI-vSf.jpg';
  imgDugouting: string = 'https://v.cdn.vine.co/r/avatars/B68F437E-F58B-4598-88A6-E9A9BDBF4F50-748-000000A25992102776f5aea9d3.jpg?versionId=mIetbj5d9Pb.MagwzYn7WzAXBwqCftVi';

  mainCardImg: string = this.imgDugouting;

  constructor() { }

  ngOnInit() {
  }

}
