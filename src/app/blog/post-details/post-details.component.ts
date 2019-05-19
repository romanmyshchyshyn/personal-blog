import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  post: Post;
  
  constructor() { }

  ngOnInit() {
  }

}
