import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { GameService } from '../services/game.service';

@Injectable({
  providedIn: 'root'
})
export class CookieGuard {

  constructor(
    private gs: GameService,
    private route: Router
  ) { }

  /**
   * Implements a guard to protect the application routes. If the 'acceptCookies'
   * cookie does not exist or has a false value, the user will not be able to access or load
   * the protected routes.
   * 
   * @param route The activated route snapshot.
   * @param state The current router state snapshot.
   * @returns {boolean} if the user can access or load the route.
   * @memberof CookieGuard
   * @method canActivate
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this.gs.checkAcceptCookies()) {
      return true;
    } else {
      this.route.navigateByUrl('/home');
      return false;
    }
  }
}