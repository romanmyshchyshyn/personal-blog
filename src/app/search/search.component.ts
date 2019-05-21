import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onInput(data: string) {
    this.router.navigate([this.auth.redirectUrl || '/']);
    this.searchService.search(data);    
  }
}
