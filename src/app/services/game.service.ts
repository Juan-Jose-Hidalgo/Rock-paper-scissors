import { Injectable } from '@angular/core';
import { WinCondition } from '../models/win-condition.type';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private goToResults = false;
  private score = 5;
  private winConditions: WinCondition = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper']
  }

  constructor(
    private cs: CookieService
  ) { }

  get getScore() {
    return this.score;
  }

  async cpuMove(optionsArray: string[]): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const randomNumber = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[randomNumber];
  }

  play(userMove: string) {
    this.cs.set('userMove', userMove);
    this.goToResults = true;
  }

  setGame(userMove: string, cpuMove: string, scoreType: string) {
    let result = '';

    if (userMove === cpuMove) result = 'draw';
    else result = this.winConditions[userMove].includes(cpuMove) ? 'you win' : 'you lose';

    this.updateScore(result, scoreType);

    return result;
  }

  checkLocalScore(type: string) {
    if (!this.cs.get(type)) this.cs.set(type, '0');
    this.score = parseInt(this.cs.get(type));
  }

  updateScore(result: string, scoreType: string) {
    this.score = parseInt(this.cs.get(scoreType));

    if (result === 'you win') this.score++;
    else if (result === 'you lose') this.score--;
    
    this.cs.set(scoreType, this.score.toString());
  }

}
