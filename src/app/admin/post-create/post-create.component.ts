import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  editorTitle: string = "Create post";

  loading = false;
  failed: boolean;

  constructor(
    private postService: PostService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit($event) {
    this.failed = false;
    this.loading = true;

    this.postService.add($event).subscribe(
      data => this.router.navigate([this.auth.redirectUrl || '/']),
      error => {
        console.log(error);
        this.failed = true;
        this.loading = false;
      }     
    );
  }
}
