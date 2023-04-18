import { Injectable } from '@angular/core';
import { WinCondition } from '../models/win-condition.type';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private goToResults = false;
  private score = 5;
  private userMove = '';
  private winConditions: WinCondition = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper']
  }

  constructor() { }

  get getScore() {
    return this.score;
  }

  get getUserMove() {
    return this.userMove;
  }

  cpuMove(optionsArray: string[]) {
    const randomNumber = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[randomNumber];
  }

  play(userMove: string) {
    this.userMove = userMove;
    this.goToResults = true;
  }

  setGame(userMove: string, cpuMove: string, gameType: string) {
    let result = '';

    if (userMove === cpuMove) result = 'draw';
    result = this.winConditions[userMove].includes(cpuMove) ? 'you win' : 'you lose';
  }

  checkLocalScore(type: string) {
    if (!localStorage.getItem(type)) localStorage.setItem(type, '0');
    this.score = Number(localStorage.getItem(type));
  }

}
