import {Component, Input, OnInit} from '@angular/core';
import { LayoutEnum } from '../app.component';

export class RadioButtonOption {
  public value: any;
  public label: string;

  constructor(value: any, label: string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'planhub-radio-button',
  templateUrl: './planhub-radio-button.component.html',
  styleUrls: ['./planhub-radio-button.component.scss']
})
export class PlanhubRadioButtonComponent implements OnInit {

  @Input() ariaLabel: string;
  @Input() options: Array<RadioButtonOption>;
  @Input() layout: LayoutEnum;
  @Input() disabled: boolean;

  get fxLayout(): string {
    return this.layout === LayoutEnum.Row ? 'row' : 'column';
  }

  constructor() {
    this.ariaLabel = '';
    this.options = [];
    this.layout = LayoutEnum.Row;
    this.disabled = false;
  }

  ngOnInit(): void {
  }

}
