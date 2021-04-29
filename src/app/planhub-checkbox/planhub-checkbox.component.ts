import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'planhub-checkbox',
  templateUrl: './planhub-checkbox.component.html',
  styleUrls: ['./planhub-checkbox.component.scss']
})
export class PlanhubCheckboxComponent implements OnInit {

  @Input() label: string;
  @Input() disabled: boolean;

  constructor() {
    this.label = '';
    this.disabled = false;
  }

  ngOnInit(): void {
  }

}
