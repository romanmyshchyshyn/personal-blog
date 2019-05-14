import { Component, OnInit } from '@angular/core';
import { faPuzzlePiece, faSignOutAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faPuzzlePiece = faPuzzlePiece;
  faSignOutAlt = faSignOutAlt;
  faEllipsisV = faEllipsisV;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  signout() {
    this.auth.signout();
  }

  test() {
    console.log(this.auth.user);    
  }
}
