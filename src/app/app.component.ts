import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, RouterOutlet } from '@angular/router';
import { filter, tap, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  navigating = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sub.add(this.router.events.pipe(
      filter(e => e instanceof NavigationStart || e instanceof NavigationEnd || e instanceof NavigationCancel),
      debounceTime(10),
      tap((e) => this.navigating = e instanceof NavigationStart),
    ).subscribe());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
