import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-accept-cookies',
  templateUrl: './accept-cookies.component.html',
  styleUrls: ['./accept-cookies.component.scss']
})
export class AcceptCookiesComponent {

  @Output() cookies = new EventEmitter<boolean>();

  constructor(
    private cs: CookieService,
    private route: Router
  ) { }

  @ViewChild('acceptCookies') acceptCookies!: ElementRef;

  /**
   * Setss the 'acceptCookies' cookie to 'true' and emits a boolean value of 'true'
   * through the 'cookies' event.
   * 
   * @memberof AcceptCookiesComponent
   * @returns {void}
   */
  acceptCookiesHandle(): void {
    this.cs.set('acceptCookies', 'true', undefined, '/');
    this.cookies.emit(true);
  }

  navigateToCookiesPolicy() {
    this.route.navigateByUrl('/cookies-policy');
  }
}
