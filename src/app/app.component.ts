import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rock Paper Scissors';
  toogleModal = false;

  openModal() {
    this.toogleModal = true;
  }

  closeModal(event: boolean) {
    this.toogleModal = event;
  }
}
