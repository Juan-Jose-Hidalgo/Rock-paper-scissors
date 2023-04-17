import { Component, Input, OnInit } from '@angular/core';
import { getBtnClass } from 'src/app/helpers/getBtnClass.helper';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnName = 'paper';
  public clasess = 'board__btn board__btn--paper';

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.clasess = getBtnClass(this.btnName);
  }
}
