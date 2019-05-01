import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Subscription} from 'rxjs/index';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'sdss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sdss';
  routerSub: Subscription;

  constructor(private spinner: NgxSpinnerService,
              private router: Router) {

  }

  ngOnInit() {
    this.showqSpinner();
  }

  showqSpinner() {
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.spinner.hide();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}
