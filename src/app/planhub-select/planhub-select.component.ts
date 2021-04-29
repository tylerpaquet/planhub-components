import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'planhub-select',
  templateUrl: './planhub-select.component.html',
  styleUrls: ['./planhub-select.component.scss']
})
export class PlanhubSelectComponent implements OnInit {

  @Input() options: Array<any>;
  @Input() displayProperty: string | null;
  @Input() label: string;
  @Input() isMultiSelect: boolean;
  @Input() disabled: boolean;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.options = [];
    this.displayProperty = null;
    this.label = '';
    this.isMultiSelect = false;
    this.disabled = false;
  }

  ngOnInit(): void {
  }

  public emitSelectionChange($event: any): void {
    this.selectionChange.emit($event);
  }

}
