import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { PostService } from 'src/app/admin/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  safeUrl: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private postService: PostService,
    private route: ActivatedRoute)
  { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.postService.get(id).subscribe(
      (data: Post) => {
        this.post = data;
        this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(data.image);
      } 
    );
  }

}
