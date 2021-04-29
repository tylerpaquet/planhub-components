import {Component, Input, OnInit} from '@angular/core';
import {Form, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'planhub-input',
  templateUrl: './planhub-input.component.html',
  styleUrls: ['./planhub-input.component.scss']
})
export class PlanhubInputComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(required: boolean) {
    this._required = required;
    if (this._required){
      this.formControl.setValidators([Validators.required]);
    }
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    if (this._disabled){
      this.formControl.disable();
    }
  }

  public formControl: FormControl;
  private _disabled: boolean;
  private _required: boolean;

  constructor() {
    this.label = '';
    this.placeholder = '';
    this._disabled = false;
    this._required = false;
    this.formControl = new FormControl();
  }

  ngOnInit(): void {
  }

}
