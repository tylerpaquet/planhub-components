import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'planhub-search',
  templateUrl: './planhub-search.component.html',
  styleUrls: ['./planhub-search.component.scss']
})
export class PlanhubSearchComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  @Input() autocompleteOptions: Array<any>;
  @Input() autoCompleteOptionDisplayProperty: string;
  public formControl = new FormControl();
  public filteredOptions: Observable<Array<any>>;

  get getOptionText(): (option?: any) => string {
    return (option?: any): string => {
      return option ? option[this.autoCompleteOptionDisplayProperty] : '';
    };
  }

  constructor() {
    this.label = '';
    this.placeholder = '';
    this.disabled = false;
    this.autocompleteOptions = [];
    this.autoCompleteOptionDisplayProperty = '';
    this.filteredOptions = new Observable<Array<any>>();
  }

  ngOnInit(): void {
    if (this.autocompleteOptions.length > 0) {
      this.filteredOptions = this.formControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }
  }

  public emitSearchValue(searchValue: any): void {
    if (searchValue !== '' && searchValue !== null){
      console.log(searchValue);
      this.search.emit(searchValue);
    }
  }

  private _filter(value: any): any[] {
    if (typeof value === 'string'){
      if (this.autoCompleteOptionDisplayProperty === ''){
        return this.autocompleteOptions.filter(option => option.toLowerCase().includes(value.toLowerCase()));
      }
      else {
        return this.autocompleteOptions.filter(option =>
          option[this.autoCompleteOptionDisplayProperty].toLowerCase().includes(value.toLowerCase())
        );
      }
    }
    else {
      return this.autocompleteOptions.filter(option =>
        option[this.autoCompleteOptionDisplayProperty].toLowerCase().includes(value[this.autoCompleteOptionDisplayProperty].toLowerCase())
      );
    }
  }

}
