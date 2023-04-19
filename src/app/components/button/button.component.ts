import { Component, Input, OnInit } from '@angular/core';
import { getBtnClass } from 'src/app/helpers/getBtnClass.helper';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnName = 'none';
  public clasess = 'board__btn board__btn--none';

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.clasess = getBtnClass(this.btnName);
  }
}
