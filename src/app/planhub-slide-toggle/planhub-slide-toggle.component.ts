import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'planhub-slide-toggle',
  templateUrl: './planhub-slide-toggle.component.html',
  styleUrls: ['./planhub-slide-toggle.component.scss']
})
export class PlanhubSlideToggleComponent implements OnInit {

  @Input() label: string;
  @Input() disabled: boolean;

  constructor() {
    this.label = '';
    this.disabled = false;
  }

  ngOnInit(): void {
  }

}
