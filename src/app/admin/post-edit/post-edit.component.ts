import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from 'src/app/models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post: Post;
  editorTitle: string = "Update post";

  loading = false;
  failed: boolean;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router)
  { }

  ngOnInit() {
    const postId: string = this.route.snapshot.paramMap.get('id');
    this.postService.get(postId).subscribe(
      (data: Post) => this.post = data,
      (error) => console.log(error)
    );
  }

  onSubmit($event) {
    this.failed = false;
    this.loading = true;

    this.postService.update($event).subscribe(
      data => this.router.navigate([this.auth.redirectUrl || '/']),
      error => {
        console.log(error);
        this.failed = true;
        this.loading = false;
      }    
    );
  }
}
