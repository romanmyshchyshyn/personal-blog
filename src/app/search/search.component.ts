import { Component, OnInit } from '@angular/core';
import { PostService } from '../admin/post.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private postService: PostService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onInput(data: string) {
    console.log("onInput:" + data);
    
    this.postService.search(data);
    this.router.navigate([this.auth.redirectUrl || '/'])
  }
}
