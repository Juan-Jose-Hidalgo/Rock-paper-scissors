import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-classic-board',
  templateUrl: './classic-board.component.html',
  styleUrls: ['./classic-board.component.scss']
})
export class ClassicBoardComponent {

  constructor(
    private cs: CookieService,
    private route: Router
  ) { }

  /**
   * Saves the user's move and navigates to the game results page.
   * 
   * @memberof ClassicBoardComponent
   * @param playerMove The move selected by the player.
   * @returns {void}
   */
  goToResults(playerMove: string): void {
    this.cs.set('userMove', playerMove, undefined, '/');
    this.route.navigateByUrl('/game/results')
  }
}
