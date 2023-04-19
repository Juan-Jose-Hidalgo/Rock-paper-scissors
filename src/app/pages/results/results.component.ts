import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  private gameOptions = ['rock', 'paper', 'scissors'];

  constructor(
    private cookieService: CookieService,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.userMove = this.cookieService.get('userMove');
    this.calculateResult();
  }

  /**
   * Calculates the result of the game and assigns it to the 'result' property.
   * Sets the CPU move to the 'cpuMove' property.
   *
   * @memberof ResultsComponent
   * @returns {Promise<void>} A Promise that resolves when the result and CPU move have been calculated and assigned.
   */
  async calculateResult(): Promise<void> {
    //Get cpu move
    this.cpuMove = await this.gameService.cpuMove(this.gameOptions);

    //Calculate the result of the game
    this.result = this.gameService.setGame(this.userMove, this.cpuMove, 'normalGameScore');
  }
}
