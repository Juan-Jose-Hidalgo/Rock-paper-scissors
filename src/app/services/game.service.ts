import { Injectable } from '@angular/core';
import { WinCondition } from '../models/win-condition.type';
import { CookieService } from 'ngx-cookie-service';
import { ScoreTable } from '../models/score-table.type';
import { ModeConfig } from '../models/mode-config.type';
import { Score } from '../models/score.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private normalScore = 0;
  private advancedScore = 0;

  private scoreTable: ScoreTable = {
    'you win': 1,
    'you lose': -1,
    draw: 0
  };

  private modeConfig: ModeConfig = {
    classic: {
      img: '/assets/img/logo.svg',
      class: 'score__logo',
      scoreValue: this.getNormalScore
    },
    'lizard-spock': {
      img: '/assets/img/logo-bonus.svg',
      class: 'score__logo score__logo--bonus',
      scoreValue: this.getAdvancedScore
    }
  };

  private winConditions: WinCondition = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  }

  constructor(
    private cs: CookieService
  ) { }

  /**
   * Getter to obtain the normal game score.
   * It checks if there is a local score and returns it, otherwise returns the default value.
   * It also updates the local score with the default value.
   * 
   * @memberof GameService
   * @returns {number} The normal game score.
   */
  get getNormalScore(): number {
    const localScore = this.checkLocalScore('normalGameScore');

    if (!isNaN(localScore)) {
      this.normalScore = localScore;
      this.cs.set('normalGameScore', this.normalScore.toString(), undefined, '/');
    }

    return this.normalScore;
  }

  /**
   * Returns the advanced game score. If the score is not set in the local storage, it will be initialized to 0.
   * 
   * @returns {number} The advanced game score.
   */
  get getAdvancedScore(): number {
    const localScore = this.checkLocalScore('advancedGameScore');

    if (!isNaN(localScore)) {
      this.advancedScore = localScore;
      this.cs.set('advancedGameScore', this.advancedScore.toString(), undefined, '/');
    }

    return this.advancedScore;
  }

  /**
   * Checks if the acceptCookies exists.
   * 
   * @memberof GameService
   * @returns {boolean}
   */
  checkAcceptCookies(): boolean{
    return this.cs.check('acceptCookies');
  }

  /**
   * Asynchronously generates a move for the CPU player.
   * 
   * @async
   * @memberof GameService
   * @param {string[]} options - An array containing the available move options.
   * @returns {Promise<string>} A promise that resolves to a string representing the CPU's move.
   */
  async cpuMove(options: string[]): Promise<string> {
    await this.delay(500);
    const randomNumber = Math.trunc(Math.random() * options.length);
    return options[randomNumber];
  }

  /**
   * Initializes a new score object for the given game mode.
   * 
   * @memberof GameService
   * @param {string} gameMode - The selected game mode.
   * @returns {Score} - A score object containing the image and class for the given game mode.
   */
  initScore(gameMode: string): Score {
    const config = this.modeConfig[gameMode];
    const score: Score = {
      img: config.img,
      class: config.class,
    };
    return score;
  }

  /**
   * Resets the score of the specified type to 0.
   * 
   * @memberof GameService
   * @param scoreType - The type of score to reset.
   * @returns {void}
   */
  resetScore(scoreType: string): void {
    this.cs.set(scoreType, '0', undefined, '/');
  }

  /**
   * Updates the score and returns the result of the game.
   * @memberof GameService
   * @param userMove - The move chosen by the user.
   * @param cpuMove - The move generated by the CPU.
   * @param scoreType - The type of score to update.
   * @returns A string with the result of the game ('draw', 'you win', 'you lose').
   */
  setGame(userMove: string, cpuMove: string, scoreType: string) {
    const result = this.calculateResult(userMove, cpuMove);
    this.updateScore(result, scoreType);
    return result;
  }

  /**
   * Updates the game score according to the result of a game round and the type of the score.
   * 
   * @memberof GameService
   * @param result - A string representing the result of a game round (win, lose, tie).
   * @param scoreType - A string representing the type of the score (normalGameScore, advancedGameScore).
   * @returns {void}
   * @remarks This method updates the game score and saves it in a cookie using the CookieService.
   * @requires CookieService to be injected.
   */
  updateScore(result: string, scoreType: string): void {
    //Gets the current score from the cookie.
    const currentScore = parseInt(this.cs.get(scoreType) ?? '0');

    //Calculates the new score.
    const newScore = this.calculateNewScore(result, currentScore);

    //Update gameScore atributte.
    if (scoreType === 'normalGameScore') this.normalScore = newScore;
    else this.advancedScore = newScore;

    //Sets the new score in the cookie.
    this.cs.set(scoreType, newScore.toString(), undefined, '/');
  };

  /**
   * Calculates the result of the game based on the user move, the cpu move and the score type.
   * @private
   * @memberof GameService
   * @param userMove - The user's move, as a string.
   * @param cpuMove - The CPU's move, as a string.
   * @returns A string representing the result of the game, either 'you win', 'you lose' or 'draw'.
   */
  private calculateResult(userMove: string, cpuMove: string) {
    if (userMove === cpuMove) return 'draw';
    const userWins = this.winConditions[userMove].includes(cpuMove);
    return userWins ? 'you win' : 'you lose';
  }

  /**
   * Calculates the new score based on the game result and the new score.
   * 
   * @private
   * @memberof GameService
   * @param currentScore - The current score of the player.
   * @param result - The game result, can be "you win", "you lose" or "draw".
   * @returns The new score of the player after the game.
   */
  private calculateNewScore(result: string, currentScore: number): number {
    const scoreChange = this.scoreTable[result] ?? 0;
    return currentScore + scoreChange;
  };

  /**
   * Checks the local score for a given score type.
   * 
   * @param scoreType - The score type to check.
   * @returns The local score for the given score type.
   * @private
   * @memberof GameService 
   * @requires CookieService to be injected.
   * @requires cs to be an instance of CookieService.
   * @returns {number}
   */
  private checkLocalScore(scoreType: string): number {
    return parseInt(this.cs.get(scoreType) || '0');
  }

  /**
   * Delays the execution of code for a specified amount of time.
   * 
   * @async 
   * @memberOf GameService 
   * @param ms - The time to delay in millisecons.
   * @returns A promise that resolves after the specified time has elapsed.
   * @returns {Promise<void>}
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
