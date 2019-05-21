import { Component, OnInit } from '@angular/core';
import { faPuzzlePiece, faSignOutAlt, faEllipsisV, faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { SubscribeService } from '../shared/services/subscribe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faPuzzlePiece = faPuzzlePiece;
  faSignOutAlt = faSignOutAlt;
  faEllipsisV = faEllipsisV;
  faBell = faBell;
  faBellSlash = faBellSlash;

  constructor(
    public auth: AuthService, 
    private router: Router,
    private subscribeService: SubscribeService
    ) { }

  ngOnInit() {
  }

  signout() {
    this.auth.signout();
    this.router.navigate([this.auth.redirectUrl || '/']);
  }

  subscribe(action: boolean) {
    this.subscribeService.subscribe(action).subscribe(
      data  => data,
      error => console.log(error)
    );
  }
}
