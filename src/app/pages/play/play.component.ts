import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ModeConfig } from 'src/app/models/mode-config.type';
import { Score } from 'src/app/models/score.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  public gameMode = 'classic';
  public score!: Score;
  public toogleModal = false;
  public scoreValue = 0;
  public rulesImg = '/assets/img/image-rules.svg'

  constructor(
    private cs: CookieService,
    private route: Router,
    private gs: GameService
  ) { }

  get getNormalScore() {
    return this.gs.getNormalScore;
  }

  get getAdvancedScore() {
    return this.gs.getAdvancedScore;
  }

  ngOnInit(): void {
    this.gameMode = this.cs.get('gameMode');
    this.initScore(this.gameMode);
    this.setImageRules();
  }

  /**
   * Stores  the user's move in a cookie and navigates to the normal game results page.
   * 
   * @memberof PlayComponent
   * @param userMove The move made by the user.
   * @returns {void}
   */
  play(userMove: string): void {
    this.cs.set('userMove', userMove, undefined, '/');
    this.route.navigateByUrl('/normal-game-results');
  }

  /**
   * Initializes the score for a specific game mode using the gameService.
   * 
   * @param gameMode - The game mode for which to initialize the score.
   * @returns The initialized score.
   * @remarks
   * This method makes use of the gameService to initialize the score for a specific game mode.
   */
  initScore(gameMode: string): void {
    this.score = this.gs.initScore(gameMode);
  }

  openModal() {
    this.toogleModal = true;
  }

  closeModal(event: boolean) {
    this.toogleModal = event;
  }

  setImageRules() {
    this.rulesImg = this.gameMode === 'classic' ? '/assets/img/image-rules.svg' : '/assets/img/image-rules-bonus.svg';
  }
}
