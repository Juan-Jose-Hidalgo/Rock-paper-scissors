import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AvaliableOptions, GameOptions } from 'src/app/models/game-options.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-normal-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public userMove = '';
  public cpuMove = 'none';
  public result = '';

  private gameMode = '';
  private gameOptions!: GameOptions;
  private options: AvaliableOptions = {
    advancedOptions: {
      moves: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
      scoreType: 'advancedGameScore'
    },
    classicOptions: {
      moves: ['rock', 'paper', 'scissors'],
      scoreType: 'normalGameScore'
    }
  }

  constructor(
    private cookieService: CookieService,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getGameOptions();
    this.userMove = this.cookieService.get('userMove');
    this.calculateResult();
  }

  // get advancedGameScore() {
  //   return this.gameService.getAdvancedScore;
  // }

  // get normalGameScore() {
  //   return this.gameService.getNormalScore;
  // }

  /**
   * Calculates the result of the game and assigns it to the 'result' property.
   * Sets the CPU move to the 'cpuMove' property.
   *
   * @memberof ResultsComponent
   * @returns {Promise<void>} A Promise that resolves when the result and CPU move have been calculated and assigned.
   */
  async calculateResult(): Promise<void> {
    //Get cpu move.
    this.cpuMove = await this.gameService.cpuMove(this.gameOptions.moves);

    //Calculate the result of the game.
    this.result = this.gameService.setGame(this.userMove, this.cpuMove, this.gameOptions.scoreType);
  }

  //ToDo: Document this method.
  getGameOptions(): void {
    this.gameMode = this.cookieService.get('gameMode');
    this.gameOptions = this.gameMode === 'lizard-spock' ? this.options.advancedOptions : this.options.classicOptions;
  }
}
