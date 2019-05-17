import { Component, OnInit } from '@angular/core';
import { faPuzzlePiece, faSignOutAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faPuzzlePiece = faPuzzlePiece;
  faSignOutAlt = faSignOutAlt;
  faEllipsisV = faEllipsisV;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signout() {
    this.auth.signout();
    this.router.navigate([this.auth.redirectUrl || '/']);
  }
}
