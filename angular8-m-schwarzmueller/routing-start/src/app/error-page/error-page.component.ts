import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  errorMessage: string;

  private routeDataSubscription: Subscription;

  constructor(private route: ActivatedRouteSnapshot) { }

  ngOnInit() {

    this.routeDataSubscription = this.route.data.subscibe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

  ngOnDestroy() {
    this.routeDataSubscription.unsubscribe();
  }

}
