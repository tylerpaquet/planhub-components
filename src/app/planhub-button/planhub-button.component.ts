import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

export enum ButtonTypeEnum {
  'Primary',
  'Secondary',
  'Tertiary'
}

@Component({
  selector: 'planhub-button',
  templateUrl: './planhub-button.component.html',
  styleUrls: ['./planhub-button.component.scss']
})
export class PlanhubButtonComponent implements OnInit {
  @Input() buttonType: ButtonTypeEnum;
  @Input() buttonText: string;
  @Input() disabled: boolean;

  get buttonTypeEnum(): typeof ButtonTypeEnum {
    return ButtonTypeEnum;
  }

  constructor() {
    this.buttonText = '';
    this.buttonType = ButtonTypeEnum.Primary;
    this.disabled = false;
  }

  public ngOnInit(): void {
  }
}
