import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public acceptCookies = false;
  public bonusImg = '/assets/img/logo-bonus.svg';

  constructor(
    private cs: CookieService,
    private gs: GameService,
    private route: Router
  ) { }

  get getNormalScore() {
    return this.gs.getNormalScore;
  }

  get getAdvancedScore() {
    return this.gs.getAdvancedScore;
  }

  ngOnInit() {
    this.checkCookies();
  }

  /**
   * Resets the score of a given score type.
   * @param scoreType - The type of score to reset ('normal' or 'advanced').
   * @memberof HomeComponent
   * @returns {void}
   * @remarks
   * This method makes use of the GameService instance to reset the score.
   */
  resetScore(scoreType: string): void {
    this.gs.resetScore(scoreType);
  }

  /**
   * Starts a new game with the selected game mode.
   * @param gameMode - The selected game mode.
   * @memberof HomeComponent
   * @returns {void}
   * @requires GameService - This method requires the GameService to be injected in order to function properly.
   */
  startGame(gameMode: string): void {
    this.cs.set('gameMode', gameMode, undefined, '/');
    this.route.navigateByUrl(`/game/${gameMode}`);
  }

  /**
   * Checks if the user has accepted the cookies and sets the value of acceptCookies accordingly.
   * Makes use of the CookieService to check if the acceptCookies cookie is set.
   * @remarks
   * This method updates the value of acceptCookies property of the class based on the cookie value.
   * 
   * This method depends on the GameService being initialized before it can be used.
   * @returns void
   */
  checkCookies() {
    this.acceptCookies = this.cs.check('acceptCookies');
  }

  acceptCookiesHandler(event: boolean) {
    this.acceptCookies = event;
  }
}

